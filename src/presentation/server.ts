import express, {Router} from 'express'

interface Options{
    port:number;
    routes:Router;
    publicPath?:string;
}
export class Server {
    private app = express();
    private readonly port:number;
    private readonly routes:Router;
    private readonly publicPath:string;
    constructor(options:Options) {
        const {port,routes,publicPath='public'}=options;
        this.port=port
        this.routes=routes
        this.publicPath=publicPath

    }
    async start(){

        //*Middlewares
        this.app.use(express.json()); //(any incoming request, serialize the body as JSON)

        //*Routes
        this.app.use(this.routes);


        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${ this.port }`)
        })
    }
}