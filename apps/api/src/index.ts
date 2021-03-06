import { Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';

export const globalPrefix = 'api';

let cachedServer: Server;

function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);

  return NestFactory.create(AppModule, adapter)
    .then(app =>  app.setGlobalPrefix(globalPrefix))
    .then(app => {app.enableCors(); return app})
    .then(app => app.init())
    .then(() => serverless.createServer(expressApp));
}

export const handler: Handler = (event: any, context: Context) => {
  if (!cachedServer) {
    bootstrapServer().then(server => {
      cachedServer = server;
      return serverless.proxy(server, event, context);
    });
  } else {
    return serverless.proxy(cachedServer, event, context);
  }
};
