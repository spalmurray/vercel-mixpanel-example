import { app } from '../index.js';

export default function mixpanel(req, res) {
  app.callback()(req, res);
}