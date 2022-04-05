import axios from 'axios';
import { URL_LOCALHOST, CURRENT } from '../constants/constants';
import { LANGCODES } from '../constants/lang-codes';
import { Coord } from '../interfaces/api.interface';

export class ApiService {
    private APIKEY: string;
    private lang: string | undefined;
    private units: string | undefined;

    constructor(APIKEY: string, lang: string = 'es', units: string = 'metric') {
        this.APIKEY = APIKEY;
        this.configurarIdioma(lang);
        this.configurarUnidades(units);
    }

    /**
     * Configuramos el idioma
     * @param lang Código del idioma
     */
    private configurarIdioma(lang: string) {
        if(LANGCODES.filter(l => l.code === lang).length === 1) {
            this.lang = `&lang=${lang}`;
        } else {
            this.lang = `&lang=es`;
        }
    }

    /**
     * Obtenemos la unidades mediante la configuración
     * @param unit Unidad si es métrico o no
     */
    private configurarUnidades(unit: string) {
        this.units = '';
        if(unit === 'm' || unit === 'metric') {
            this.units = '&units=metric'
        }
    }

    /**
     * Obtener el tiempo actual buscando
     * @param nombre nombre del lugar
     * @param codPais código del país, ejemplo 'mx' de México
     */
    buscarPorNombre(nombre: string, codPais: string = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';

        if(codPais === '') {
            filtro = `q=${nombre}`;
        } else {
            filtro = `q=${nombre},${codPais}`;
        }

        // Llamada a la API
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;

        return this.requestAPI(url);
    }

    /**
     * Obtener el tiempo mediante la localización
     * @param localizacion coordenanas latitud, longitud del lugar a buscar
     */
    buscarPorCoordenadas(localizacion: Coord) {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';

        if(localizacion === undefined || localizacion === null) {
            filtro = `lat=-33.8473&lon=150.652`;
            console.warn('Coordenadas por defecto ya que la insertadas son incorrectas');
        } else {
            filtro = `lat=${localizacion.lat}&lon=${localizacion.lon}`;
        }

        // Llamada a la API
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;

        return this.requestAPI(url);
    }

    /**
     * Obtener clima mediante el código postal del lugar
     * @param cp código postal del lugar
     * @param codPais código de país, ejemplo 'mx' de México
     */
    buscarPorCodigoPostal(cp: string, codPais: string = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';

        if(codPais === '') {
            filtro = `zip=${cp}`;
        } else {
            filtro = `zip=${cp},${codPais}`;
        }

        // Llamada a la API
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;

        return this.requestAPI(url);
    }

    private requestAPI(url: string) {
        return axios.get(url).then(d => d.data).catch(error => error);
    }
}