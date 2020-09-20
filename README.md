#### I don't take any responsibility for blocked Discord accounts that used this module.

#### Using this is prohibited by the [Discord TOS](https://discordapp.com/terms) and can lead to the account block.

# Discord SB

A perfect module for having your own selfbot on discord platform without coding a lot

### Commands

Discord SB Have it own commands that gonna be listed in here (There will be updates for new commands!)

* Ping - See Your Bot's ping and latency
* Eval - Eval your NodeJS Code

also you can get the commands by running `npm test` or having `console.log(<DSB>.commands());` in your code!

## Example

```
const DSB = require('discordsb');

    // Config Your DSB
        DSB.config('<MY TOKEN>', '<PREFIX>');
    // Load the commands that you want
        DSB.load('ping');
        DSB.load('eval');

    // Start The Bot
        DSB.setup();
```
