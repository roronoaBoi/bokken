const helloName = process.argv[2]
const goodbyeName = process.argv[3]
const idkName = process.argv[4]

function sayHello(helloName) {
    console.log(`hello ${helloName}`)
}

const sayGoodbye = (goodbyeName) => {
    console.log(`bye ${goodbyeName}`);
};

const sayIdk = idkName => console.log(`I don't know ${idkName}`);

sayHello(helloName)
sayGoodbye(goodbyeName)
sayIdk(idkName)
