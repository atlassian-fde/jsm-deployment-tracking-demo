# jsm-deployment-tracking-demo

Demo billing API showing **GitHub Actions → Jira Service Management change tracking**.

Every deploy to the GitHub environment `production` automatically creates a **Change** work item
in the JSM service space connected to the service referenced in `.jira/config.yml`
(via the GitHub for Atlassian app). No webhooks or automation rules are needed.

Pipeline: `build` (npm test) → `deploy-staging` → `deploy-production`.
