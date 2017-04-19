Picarto.js
==========
An unofficial node.js library for interacting with Picarto.tv's API. See https://docs.picarto.tv/api/.
 

## Installation

```sh
npm install --save tschrock/picarto.js
```

## Usage
### JS
```js
// Include the library
var picartojs = require('picarto.js');

// Start a new session
var apiSession = new picartojs.PicartoAPI();

// Get the details about your channel (See https://picarto.tv/settings/api)
apiSession.getChannelInfo("<AccessKey>").then(
    info => {
        console.log("Your channel has " + info.followers + " followers!");
    },
    error => {
        console.log("Error getting channel info: ", error);
    }
)
```

### TS
```ts
// Include the library
import { PicartoAPI } from 'picarto.js';

// Start a new session
var apiSession = new PicartoAPI();

// Get the details about your channel (See https://picarto.tv/settings/api)
apiSession.getChannelInfo("<AccessKey>").then(
    info => {
        console.log(`Your channel has ${info.followers} followers!`);
    },
    error => {
        console.log(`Error getting channel info: ${error}`);
    }
)
```

## Legal
This library is not endorsed, supported or otherwise associated with
Picarto or it's team. It is provided as-is with no guarantees. Please
make sure you read through and comply with Picarto's TOS: 
<https://picarto.tv/site/terms>

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.

