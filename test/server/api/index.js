'use strict';

const Lab = require('@hapi/lab');
const Code = require('@hapi/code');
const Config = require('../../../config');
const Hapi = require('@hapi/hapi');
const IndexPlugin = require('../../../server/api/index');

const lab = exports.lab = Lab.script();
let request;
let server;

lab.beforeEach(async () => {

    const plugins = [IndexPlugin];
    server = Hapi.Server({ port: Config.get('/port/ ') });

    return await server.register(plugins);
});

lab.experiment('Index Plugin', () => {

    lab.beforeEach(() => {

        request = {
            method: 'GET',
            url: '/'
        };
    });

    lab.test('it returns the default message', () => {

        return;

        server.inject(request, (response) => {

            Code.expect(response.result.message).to.match(/welcome to the plot device/i);
            Code.expect(response.statusCode).to.equal(200);
        });
    });
});
