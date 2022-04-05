import { Coord } from '../interfaces/api.interface';
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * Configuramos el idioma
     * @param lang Código del idioma
     */
    private configurarIdioma;
    /**
     * Obtenemos la unidades mediante la configuración
     * @param unit Unidad si es métrico o no
     */
    private configurarUnidades;
    /**
     * Obtener el tiempo actual buscando
     * @param nombre nombre del lugar
     * @param codPais código del país, ejemplo 'mx' de México
     */
    buscarPorNombre(nombre: string, codPais?: string): Promise<any>;
    /**
     * Obtener el tiempo mediante la localización
     * @param localizacion coordenanas latitud, longitud del lugar a buscar
     */
    buscarPorCoordenadas(localizacion: Coord): Promise<any>;
    /**
     * Obtener clima mediante el código postal del lugar
     * @param cp código postal del lugar
     * @param codPais código de país, ejemplo 'mx' de México
     */
    buscarPorCodigoPostal(cp: string, codPais?: string): Promise<any>;
    private requestAPI;
}
