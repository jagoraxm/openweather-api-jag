// Imports
const expect = require('chai').expect;
const ApiService = require('./../dist').ApiService;

const { describe, beforeEach, it } = require('mocha');
// Constantes
const constantes = require('./constants');
const APIURL = constantes.URL;
const APIKEY = constantes.APIKEY;

// Tests
describe('Búsqueda de clima por código postal', () => {
    beforeEach(() => {
        // Hacemos el mock
        const nock = require('nock');
        const respuesta = require('./mocks/localizacion');

        const query = {
            zip: 03630,
            units: 'metric',
            lang: 'es',
            appid: APIKEY
        };

        nock(APIURL)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, respuesta);
    });

    // Pruebas
    it('Tiempo de MX, Independencia', () => {
        const api = new ApiService(APIKEY, 'es', 'metric');

        return api.buscarPorCodigoPostal(03630).then(
            respuesta => {
                expect(typeof respuesta.id).to.equal('number')
            }
        )
    });
});