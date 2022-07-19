import { app } from '../index.js';

export default function koa(req, res) {
  app.callback()(req, res);
}