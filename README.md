## Paymill

This package wraps both the official [paymill JS npm package](https://www.npmjs.com/package/paymill-wrapper) (server-side) as well as the [paymill bridge](https://bridge.paymill.com) (client-side).

### Usage


#### Server
First initialise the paymill context with your private developer key:
```javascript
var pmc = Paymill.getContext(yourApiKey);
```

All endpoints of the Paymill API have a corresponding service in the context object (for example the transaction functions are now available under pmc.transactions).

For all available services and methods consult the documentation of the npm package and [the API docs](https://developers.paymill.com/en/reference/api-reference/).

#### Client
Just follow [the official guidelines](https://developers.paymill.com/en/reference/paymill-bridge/). You can skip the first step, as it is already taken care of inside this package. The namespace under which the bridge methods are available is "paymill", the same as in the documentation.