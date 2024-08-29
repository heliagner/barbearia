let db = [];
let nextID = 1;

const model = (body, id = nextID++) => {
    if(body.nome != "" && body.nome != undefined){
        return {
            id,
            nome: body.nome
        };
        return undefined
    };
};

const store = (body) => {
    const novo = model(body)
    if(novo) {
        db.push(novo);
        return 201;
    };
    return 401;
};

const index = () => db;

const show = () => db.find((el) => el.id == id);

const update = (body, id) => {
    const indice = db.findIndex((el) => el.id == id)
    if(indice != -1) {
        const novo = model(body, id);
        if(novo) {
            
        }
    }
}