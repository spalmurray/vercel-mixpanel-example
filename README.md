This is a minimal example of Mixpanel not working properly with Vercel and Koa.

There are three situations you can test:
1. Koa + Vercel
  1. `npm start`
  1. `curl localhost:3000/api/koa/`
  1. Check Mixpanel events
1. Vercel and no Koa
  1. `npm start`
  1. `curl localhost:3000/api/noKoa/`
  1. Check Mixpanel events
1. Koa and no Vercel
  1. `node index.js`
  1. `curl localhost:3001/api/koa/`
  1. Check Mixpanel events

As of now, only the last situation works.