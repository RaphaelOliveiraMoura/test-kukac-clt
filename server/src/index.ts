
import application from './app';

const configuration = {
    host: 'localhost',
    port: 4040
}

application.listen(configuration.port, () => {
    console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
});