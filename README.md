# harvester-ui-extension

Rancher Extension used in [rancher/dashboard](https://github.com/rancher/dashboard) for [Harvester](https://harvesterhci.io) Dashboard UI.

## Running for Development

This is what you probably want to get started.

### Standalone Mode

For development, serve with hot reload at https://localhost:8005

```bash
# Install dependencies
yarn install

# Use RANCHER_ENV to specify the endpoint for your Harvester API
RANCHER_ENV=harvester API=https://your-harvester-ip yarn dev

# Use VUE_APP_SERVER_VERSION to specify the Harvester server version
# in case your are running a dev build of Harvester
RANCHER_ENV=harvester VUE_APP_SERVER_VERSION=your-harvester-server-version API=https://your-harvester-ip yarn dev

# or put your env variables into a .env file

# Example
RANCHER_ENV=harvester VUE_APP_SERVER_VERSION=v1.4.0 API=https://192.168.1.123 yarn dev
```

### Integration Mode

In this mode, you need to have Rancher and import Harvester, more detail in [Harvester Integration | Rancher](https://ranchermanager.docs.rancher.com/v2.6/integrations-in-rancher/harvester).

```bash
# build harvester plugin
yarn build-pkg harvester && yarn serve-pkgs

# Open another terminal window
HARVESTER_PKG_URL=http://127.0.0.1:4500/harvester-${version}/harvester-${version}.umd.min.js API=https://your-rancher-ip RANCHER_ENV=harvester yarn mem-dev
```

## Contributing

For developers, after reading through the introduction on this page, head over to our [Getting Started](https://extensions.rancher.io/extensions/next/extensions-getting-started) guide to learn more.

License
=======
Copyright (c) 2014-2023 [Rancher Labs, Inc.](http://rancher.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.