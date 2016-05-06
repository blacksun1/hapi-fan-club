'use strict';

exports.register = function (server, options, next) {

    server.route({
        "method": "GET",
        "path": "/testproxy",
        "": {

        },
        "handler": function (request, reply) {
            // reply({ message: 'Welcome to the plot device.' });
            reply.proxy({
              "uri": "http://www.blacksun.cx/"
            });
        },
    });

    next();
};


exports.register.attributes = {
    "pkg": require("./package.json")
};
