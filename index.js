require("dotenv").config();
const fetch = require("node-fetch");

const urlAPI =process.env.URL_API;

const cargarArticulo = async() => {
    const resp = await fetch(process.env.URL_API);
    const articulo = await resp.json();
    console.log(articulo);
};
//node .
const borrarArticulo = async(id) => {
    const resp = await fetch(`${urlApi}${id}`,{method:"DELETE"});
    if(resp.OK){       
    }
}

const crearArticulo = async(articulo) => {
    const resp = await fetch(urlApi,{
        method: "POST",
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articulo)
    });

const nuevoArticulo = await resp.json();

};