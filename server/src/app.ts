import express from "express";
import routes from './routes';

const ENDPOINT_APPLICATION = '/';

class ApplicationController {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    public listen(port: string | number, callback: () => void): void {
        this.express.listen(port, callback);
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        this.express.use(ENDPOINT_APPLICATION, routes);
    }

}

export default new ApplicationController();