import 'dotenv/config';
import Koa from 'koa';
import Router from 'koa-router';
import Mixpanel from 'mixpanel';

export const app = new Koa();
const router = new Router({ prefix: "/api/koa" });

// Add this environment variable to a .env file in this directory.
const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN, {
  debug: true,
});

router.get('/', ctx => {
  return new Promise((resolve, reject) => {
    mixpanel.track('tracking event inside koa route', {
      distinct_id: '113',
    }, (err, res) => {
      if (err) {
        console.error(err);
        ctx.status(500);
        reject();
      }
      ctx.body = "Sent Mixpanel event using Koa"
      resolve(res);
    });
  })
});

app.use(router.routes());
app.listen(3001);