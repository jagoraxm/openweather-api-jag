# Instrucciones Open Weather Map Library
Vamos a obtener la respouesta del clima actual de un lugar seleccionado, usando diferentes opciones de filtro

## Uso


### Como añadir
```
JS
const lib = require('modulo');

TS
import lib from 'modulo';
```

### Como usarlo

* Obtener por nombre
```
const m = lib.ApiService;

const api = new m(APIKEY, 'es', 'm');

api.buscarPorNombre('Barcelona', 'es').then ()
    data => console.log(data);
);
```