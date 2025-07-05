// sentry.client.ts
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://your-dsn-url@sentry.io/project-id", // Replace with your actual DSN
  tracesSampleRate: 1.0,
});
