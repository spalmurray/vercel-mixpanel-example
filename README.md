This was a minimal example of Mixpanel not working properly with Vercel and Koa,
but this repo has led us to a solution! :)

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

All three now work with the provided configuration.