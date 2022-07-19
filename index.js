require('dotenv').config();
const Koa = require('koa');
const Mixpanel = require('mixpanel');

const app = new Koa();

// Add this environment variable to a .env file in this directory.
const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN);

app.use( async ctx => {
  mixpanel.track('tracking event inside route', {
    distinct_id: '113',
  });
  ctx.body = "Sent Mixpanel event.";
});

app.listen(3000);