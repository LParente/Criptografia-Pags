

var XMLHttpRequest = require('xhr2');
let xhttp = new XMLHttpRequest();
xhttp.withCredentials = true;
xhttp.open(
    "POST",
    "https://sandbox.sdk.pagseguro.com/checkout-sdk/sessions"
);  
xhttp.setRequestHeader(
    "Authorization",
    "Bearer tokenSandbox",
    "Access-Control-Allow-Origin",
    "*",
    "Access-Control-Allow-Headers",
    "x-requested-with",
    "Content-type",
    "application/json",
);

xhttp.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(JSON.parse(this.responseText).session);
    }
  });

xhttp.send();
