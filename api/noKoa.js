import Mixpanel from "mixpanel";

const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN, {
  debug: true,
});

export default function noKoa(req, res) {
  mixpanel.track("tracking event inside route", {
    distinct_id: "113",
  });
  res.status(200).json("Sent Mixpanel event with serverless function.");
}