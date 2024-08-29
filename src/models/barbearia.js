const franquia_controller = require("../controllers/franquia.js");

let nextID = 1;

const model = (body, id = nextID++) => {
    if(franquia_controller.show(body.franquia_id) &&
        body.nome != undefined &&
        body.nome != ""
    ){
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
            franquia_id: body.franquia_id
        };
        return undefined
    };
};

module.exports = model