const m = require('./dist').ApiService;

const api = new m('e3a006cc1ab3bd9aa47d95f702c0f7a2', 'es', 'm');

api.buscarPorNombre('Barcelona', 'es').then(data => console.log(data));
api.buscarPorCoordenadas(null).then(data => console.log(data));
api.buscarPorCodigoPostal('03630','mx').then(data => console.log(data));