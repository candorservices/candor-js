# candor-js
JS/TS Library for Candor Services' Project Mercury API.

## Documentation
You can add the library to your project with:
```
npm install FOOBAR
```
You can then get started by intializing a new instance of the `Candor` clas using your public API key found at https://candorian.app/api-dashboard.

### Verifying a license
You can verify if a license is valid using this function:
```js
let valid = await candor.verifyLicense(LICENSE_KEY, PRODUCT_ID);
```

You'll want to grab your license key and product ID from https://candorian.app/license-manager by creating a new product and then adding a license. Assign your license to your client using the tools in the dashboard.

### Retrieving a remote config
Remote configs allow clients to easily configure parts of their apps without having to mess with complicated or messy configuration files. You can use this function:
```js
let obj = await candor.getConfig(CONFIG_ID);
```
to retrieve the remote config as a JS object. You can create a remote config at https://candorian.app/config-manager.

## Need support?
If you need help with anything to do with this project, then please see the [project-mercury-support](https://canary.discord.com/channels/650773903236399134/1146431646418079744) channel in Discord under the FREELANCERS category.
