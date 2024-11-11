## Using JS in IPaaS
The example code in this folder shows how to use Javascript within the Workato JS connector. Here are some important callouts:

- exports.main (Line 22)
Example:
```js
exports.main = async ({ input }) => {
    console.log(input)
}
```

The reason that `exports` must be used is that the IPaaS has to access the code being executed by the function (`main` in this case). Without `exports`, this code runs fine, but the IPaaS requires that `exports` be used so that the code can be used as a helper.

- return { something } (line 26)
```js
exports.main = async ({ name }) => {
    const sayHello = 'hello ' + name
    return { sayHello }
}
```

The reason that the brackets are important when working with an IPaaS like Workato, is that variables are likely being used dynamically ('data pills' in Workato). If 'ro' is passed into the above function, the following will be returned:
```json
{
    "sayHello": "hello ro"
}
```

This is important because the IPaaS likely needs the key "sayHello" to be able to use that variable in other parts of an integration. Removing the brackets will make the following return:
```bash
hello ro
```

Nothing wrong with that, but without the key "sayHello", Workato won't be able to access what is being returned from the code via a data pill. Consider this in other IPaaS as well!
