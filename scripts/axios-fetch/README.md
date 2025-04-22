
# axios vs fetch

`fetch` is native to JS and returns a response. If the response requires JSON parsing, it will require extra steps. `axios` parses the response by default, making it simpler to use.

## anon function examples:
- fetch:
```js
main = async() => {
    try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error('error msg')
        const parsedResponse = await.json()
        console.log(parsedResponse)
    } catch {
        console.error('error msg: ',error)
    }
}
```

- axios:
```js
main = async() => {
    try {
        const alreadyParsedResponse = await axios.post(url,data,headers)
        console.log(alreadyParsedResponse.data)
    } catch {
        console.error('error msg: ',error)
    }
}

```

Overall, `fetch` is native but require more intentionality around parsing and error handling. `axios` has more features and adds simplicity to code.
