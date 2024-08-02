import '../prisma/db'
import dotenv from 'dotenv'
import * as http from 'http'
import express, { Request, Response } from "express"
import * as bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import compareRouter from './routes/compare.route'
import authRouter from './routes/auth.route'
import resumeRoute from './routes/resume.route'
import requirementRouter from './routes/requirement.route'
dotenv.config()

let thread = ''

export class Server {
    private readonly _app: express.Express
    private _server!: http.Server
    private _debug: boolean

    constructor(debug=true) {
        this._app = express()
        this._app.set("port", process.env.PORT || 4001)
        this._debug = debug
    }

    private init() {        
        this.configureMiddleware()        
        this._app.use('/compare', compareRouter)
        this._app.use('/auth', authRouter)
        this._app.use('/resume', resumeRoute)
        this._app.use('/company', requirementRouter)
        //     const swaggerFile = require("../docs/swagger_output.json")
        //     this._app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        // })
    }

    get app(): express.Express {
        return this._app
    }

    get server(): http.Server {
        return this._server
    }

    public configureMiddleware() {
        this.app.use((req, res, next) => {
            if(this._debug) {
                console.log(`${req.url}`)
            }
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
            next();
        });
        this._app.use(express.static(path.join(__dirname, '../public')));

        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({extended: true}));
    }

    public async start() {
        this.init()
        this._server = this._app.listen(this._app.get("port"), () => {
            if(this._debug) {
                console.log("🚀 Server is running on port " + this._app.get("port"))
            }
        })
    }

    public async stop() {
        this._server.close()
    }
}