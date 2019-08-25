'use strict';

const Composer = require('./index');


const main = async () => {

    try {
        const server = await Composer();
        await server.start();

        console.log('Started the plot device on port ' + server.info.port);
    }
    catch (err) {
        console.error('Application has crashed and burned');
        console.error(err);
        process.exit();
    }
};

main();
