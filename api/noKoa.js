import Mixpanel from "mixpanel";

const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN, {
  debug: true,
});

export default function noKoa(req, res) {
  mixpanel.track("tracking event inside Vercel serverless function, without Koa", {
    distinct_id: "113",
  },
  (err, response) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      console.log(response);
      res.status(200).send("Sent Mixpanel event with Vercel serverless function and not Koa.");
    }
  });
}