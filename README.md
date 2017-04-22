Picarto.js
==========
An unofficial node.js library for interacting with Picarto.tv's API. See https://docs.picarto.tv/api/.

**Note: this is still very much a work in progress and some things probably won't work as advertized yet :D**
 

## Installation

```sh
npm install --save tschrock/picarto.js
```

## Usage
### JS
```js
// Include the library
var picartojs = require('picarto.js');

var oauthAuthToken = "<Token>";

var bot = new picartojs.ChatClient(oauthAuthToken);

bot.on('message', function (chatMessage) {
    if(chatMessage.content.toLowerCase().indexOf("boop") != -1) {
        chatMessage.reply("Boop!");
    }
}

bot.joinChannelByName("<ChannelName>");
```

### TS
```ts
import { ChatClient } from 'picarto.js';

const oauthAuthToken = "<Token>";

const bot = new ChatClient(oauthAuthToken);

bot.on('message', chatMessage => {
    if(chatMessage.content.toLowerCase().indexOf("boop") != -1) {
        chatMessage.reply("Boop!");
    }
}

bot.joinChannelByName("<ChannelName>");
```

## Legal
This library is not endorsed, supported or otherwise associated with
Picarto or it's team. It is provided as-is with no guarantees. Please
make sure you read through and comply with Picarto's TOS: 
<https://picarto.tv/site/terms>

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at <http://mozilla.org/MPL/2.0/>.

