
import application from './app';

const configuration = {
    host: 'localhost',
    port: 6060
}

application.listen(configuration.port, () => {
    console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
});