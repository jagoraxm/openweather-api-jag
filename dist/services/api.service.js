"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants/constants");
const lang_codes_1 = require("../constants/lang-codes");
class ApiService {
    constructor(APIKEY, lang = 'es', units = 'metric') {
        this.APIKEY = APIKEY;
        this.configurarIdioma(lang);
        this.configurarUnidades(units);
    }
    /**
     * Configuramos el idioma
     * @param lang Código del idioma
     */
    configurarIdioma(lang) {
        if (lang_codes_1.LANGCODES.filter(l => l.code === lang).length === 1) {
            this.lang = `&lang=${lang}`;
        }
        else {
            this.lang = `&lang=es`;
        }
    }
    /**
     * Obtenemos la unidades mediante la configuración
     * @param unit Unidad si es métrico o no
     */
    configurarUnidades(unit) {
        this.units = '';
        if (unit === 'm' || unit === 'metric') {
            this.units = '&units=metric';
        }
    }
    /**
     * Obtener el tiempo actual buscando
     * @param nombre nombre del lugar
     * @param codPais código del país, ejemplo 'mx' de México
     */
    buscarPorNombre(nombre, codPais = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `q=${nombre}`;
        }
        else {
            filtro = `q=${nombre},${codPais}`;
        }
        // Llamada a la API
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filtro}${parametros}`;
        return axios_1.default.get(url).then(d => d.data).catch(error => error);
    }
    /**
     * Obtener el tiempo mediante la localización
     * @param localizacion coordenanas latitud, longitud del lugar a buscar
     */
    buscarPorCoordenadas(localizacion) {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (localizacion === undefined || localizacion === null) {
            filtro = `lat=-33.8473&lon=150.652`;
            console.warn('Coordenadas por defecto ya que la insertadas son incorrectas');
        }
        else {
            filtro = `lat=${localizacion.lat}&lon=${localizacion.lon}`;
        }
        // Llamada a la API
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filtro}${parametros}`;
        return axios_1.default.get(url).then(e => e.data).catch(error => error);
    }
    /**
     * Obtener clima mediante el código postal del lugar
     * @param cp código postal del lugar
     * @param codPais código de país, ejemplo 'mx' de México
     */
    buscarPorCodigoPostal(cp, codPais = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `zip=${cp}`;
        }
        else {
            filtro = `zip=${cp},${codPais}`;
        }
        // Llamada a la API
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filtro}${parametros}`;
        return axios_1.default.get(url).then(e => e.data).catch(error => error);
    }
}
exports.ApiService = ApiService;
