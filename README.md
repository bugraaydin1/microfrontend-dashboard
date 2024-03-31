# Dashboard Microfrontend Apps

[![Build and Deploy container](https://github.com/bugraaydin1/microfrontend-dashboard/actions/workflows/container_deploy.yaml/badge.svg?branch=master&event=push)](https://github.com/bugraaydin1/microfrontend-dashboard/actions/workflows/container_deploy.yaml)

Monorepo or seperate repos could be used, because of these microfrontend apps will be zero-coupled. For the sake of simplicity it is a monorepo.

## Requirements

1.  Zero coupling between child projects

- No importing of functions/objects/classes/etc
- No shared state
- Shared libraries through MF okay.

2. Near zero coupling between child and container apps.

- Container not know which framework child using
- Any necessary communication with callbacks and simple Events.

3. CSS will not affect globally. (Scoped CSS )
4. Containers will be able to choose always use latest version of MFE or use a specific version of MFE.

- Always latest version - no contaienr re-deploy
- Specific version - needs re-deploy

### container - host

- React

### auth

- React

### marketing

- React

### Dashboard

- Vue

## Env

#### Add this env variables in github or in your pipeline

```bash
AWS_ACCESS_KEY_ID
AWS_DISTRIBUTION_ID
AWS_S3_BUCKET_NAME
AWS_SECRET_ACCESS_KEY
PRODUCTION_DOMAIN
```
