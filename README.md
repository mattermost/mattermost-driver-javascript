# Mattermost JavaScript API Library

[![npm](https://img.shields.io/npm/v/mattermost.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/mattermost) [![npm](https://img.shields.io/npm/l/mattermost.svg?maxAge=2592000?style=plastic)](https://github.com/mattermost/mattermost-driver-javascript/blob/master/LICENSE.txt)


A library for interacting with the [Mattermost](https://github.com/mattermost/platform) API.

Available on [NPM](https://www.npmjs.com/package/mattermost)

To contribute, please see [Contribution Guidelines](http://docs.mattermost.com/developer/contribution-guide.html)

## Usage

### Installation

The library can be installed using npm:

```
npm install mattermost --save
```

### Usage

Example import methods:

```javascript
var Mattermost = require('mattermost');
var client = new Mattermost.Client()
```

```javascript
import {Client} from 'mattermost';
const client = new Client();
```

### API

API Documentation is coming soon. For now, take a look at the [client.jsx](https://github.com/mattermost/mattermost-driver-javascript/blob/master/client.jsx) file.


## Development

### Building 

`make build` - Compiles client.jsx into a minified lib/client.js

`make pubish` - Walks though the steps to publish the package (manually)

`make clean` - Cleans up compiled bits and npm dependencies. 

### Tests

The tests are in the [main repository](https://github.com/mattermost/platform/tree/master/webapp/tests). This is because they require the server to run.
