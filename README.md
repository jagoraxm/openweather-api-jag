# Instrucciones Open Weather Map Library
Vamos a obtener la respouesta del clima actual de un lugar seleccionado, usando diferentes opciones de filtro

## Instalación
Seguir las siguientes instrucciones de instalación

```
npm install openweather-api-jag
```

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

return api.buscarPorNombre('London', 'uk').then(
            respuesta => {
                expect(typeof respuesta.id).to.equal('number')
            }
        )
```

* Obtener por código postal
```
const m = lib.ApiService;

const api = new m(APIKEY, 'es', 'm');

return api.buscarPorCodigoPostal(03630).then(
            respuesta => {
                expect(typeof respuesta.id).to.equal('number')
            }
        );
```

* Obtener por coordenadas
```
const m = lib.ApiService;

const api = new m(APIKEY, 'es', 'm');

return api.buscarPorCoordenadas({lat: 35.02, lon: 139.01}).then(
            respuesta => {
                expect(typeof respuesta.id).to.equal('number')
            }
        )
```