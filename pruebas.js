const m = require('./dist').ApiService;

const api = new m('<APIKEY>', 'es', 'm');

//api.buscarPorNombre('Barcelona', 'es').then(data => console.log(data));
//api.buscarPorCoordenadas(null).then(data => console.log(data));
api.buscarPorCodigoPostal('03630','mx').then(data => console.log(data));