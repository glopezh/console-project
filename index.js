require("dotenv").config();
const fetch = require("node-fetch");
const inquirer = require("inquirer");

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

const preguntaUsuario = async () => {
    const respuestas = await inquirer.prompt([
        {
            name: "accion",
            type: "list",
            message: "Que quieres hacer?",
            choices: [
                {
                    value: "cargar",
                    name: "Listar un articulo",
                },
                {
                    value: "crear",
                    name: "Crear un articulo",
                },
                {
                    value: "borrar",
                    name: "Borrar un articulo",
                },
            ],
        },
    ]);
    console.log(respuestas);
};

module.exports = preguntaUsuario();


