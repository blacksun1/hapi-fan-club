'use strict';

exports.plugin = {

    pkg: require('./package.json'),

    register: function (server, options) {

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, h) {

                return { message: 'Welcome to the plot device.' };
            }
        });
    }
};
