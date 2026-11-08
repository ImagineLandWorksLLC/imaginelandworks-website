# Jobber quote requests

The site does not run its own form or email system. Quote requests go through the Jobber work-request form
embedded by [JobberForm.astro](../src/components/JobberForm.astro) on `/book/`. Jobber handles the submission,
the request record, and notifications.

## How it works

- The component loads Jobber's embed script (`d3ey4dbjkt2f6s.cloudfront.net`) when the form scrolls into view.
- The form renders inside Jobber's own embed. This site **cannot** read its fields or tell whether the visitor
  successfully submitted it (cross-origin), and it does not try to.
- Fallbacks (all use `contact.jobber.workRequestUrl`):
  - A permanent "Open it in a new tab" link under the form, plus the phone number.
  - A prominent "Open Estimate Request Form" button if the embed script **errors** or has not loaded after 12 seconds.
    This only *adds* a link; it never hides the embed.
  - A `<noscript>` button for visitors without JavaScript.
- The CSP in `netlify.toml` already allows the Jobber script, stylesheet, and frame origins.

## Project summary handoff

The calculator, planner, and maintenance page save a plain-text project summary in the visitor's browser
(`sessionStorage`, key `ilw:quote-summary`). `/book/` shows it above the form with a **Copy** button so the visitor
can paste it into the form. Jobber does not document a way to prefill the embedded form, so nothing is injected
into it. The summary contains project details only (no name, phone, or email), is never put in a URL, and is
never sent to analytics.

## Needs verification outside the repo (status: PENDING)

None of these can be confirmed from the code. They have **not** been verified:

- [ ] Submit a test request through the live `/book/` form (use an obviously fake name such as "TEST – ignore")
      and confirm it appears in Jobber as a request.
- [ ] Confirm the owner receives the new-request notification (check Jobber's notification settings).
- [ ] Confirm whether Jobber sends the requester an acknowledgement email.
      If not, enable it in Jobber rather than building a separate email system.
- [ ] Open `/book/` on a phone and submit once to confirm the embed works on mobile.
- [ ] Delete the test request in Jobber afterwards.

## Browser/privacy notes

- Loading the form contacts Jobber/CloudFront. Review the privacy policy wording if the embed changes.
- Ad blockers that block `cloudfront.net` can stop the form loading; the fallback link covers this.
