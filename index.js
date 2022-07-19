import Koa from 'koa';
import Router from 'koa-router';
import Mixpanel from 'mixpanel';

export const app = new Koa();
const router = new Router({ prefix: "/api/mixpanel" });

// Add this environment variable to a .env file in this directory.
const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN);

console.log(process.env.MIXPANEL_PROJECT_TOKEN)

router.get('/', async ctx => {
  mixpanel.track('tracking event inside route', {
    distinct_id: '113',
  });
  ctx.body = "Sent Mixpanel event.";
});

app.use(router.routes());