const fetch = require("node-fetch");

( async()=>{
    const resp = await fetch("http://localhost:3001/articulos");
    const articulos = await resp.json();
    console.log(articulos);
})();
//node .
