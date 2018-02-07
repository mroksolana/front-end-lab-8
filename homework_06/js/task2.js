var a = parseInt(prompt("Enter amount of EURO:")),
    b = parseInt(prompt("Enter amount of USD:"))

const euro = 34.5116,
    usd = 27.7424

var euro_conv = euro * a,
    usd_conv = usd * b,
    z = euro / usd

console.log(a + " euros are equal " + euro_conv.toFixed(2) + " UAH,  " + b + " dollars are equal " + usd_conv.toFixed(2) + " UAH, one euro is equal " + z.toFixed(3) + " dollars.")