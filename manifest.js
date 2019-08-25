'use strict';

const Confidence = require('confidence');
const Config = require('./config');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        routes: {
            security: true
        },
        debug: {
            request: ['error']
        },
        port: Config.get('/port/api')
    },
    register: {
        plugins: [
            {
                plugin: './server/api/index'
            },
            {
                plugin: './server/proxytest/index'
            },
            {
                plugin: '@hapi/h2o2'
            },
            {
                plugin: '@hapi/good',
                options: {
                    ops: {
                        interval: 30000
                    },
                    reporters: {
                        console: [
                            {
                                module: '@hapi/good-squeeze',
                                name: 'Squeeze',
                                args: [{
                                    log: '*',
                                    response: '*',
                                    ops: '*'
                                }]
                            },
                            {
                                module: '@hapi/good-console'
                            },
                            'stdout'
                        ]
                    }
                }
            }
        ]
    }
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
