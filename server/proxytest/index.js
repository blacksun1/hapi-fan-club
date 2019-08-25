'use strict';

exports.plugin = {
    pkg: require('./package.json'),
    register: function (server, options) {

        server.route({
            method: 'GET',
            path: '/testproxy',
            handler: async function (requiest, h) {

                return await h.proxy({ uri: 'https://www.blacksun.cx/' });
            }
        });
    }
};
