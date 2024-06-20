import debug from 'debug';
import * as dotenv from 'dotenv';
dotenv.config();


const log: debug.IDebugger = debug('app:config');
const config = {
    jwt: {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,        
    },
    port: process.env.API_S6_PORT || 4000,
    prefix: process.env.API_S6_PREFIX || 'back',
    oauth_mongodb: {
        host: process.env.MONGO_S6_HOST || '',
        user: process.env.MONGO_S6_USER || '',
        pass: process.env.MONGO_S6_PASS || '',
        port: process.env.MONGO_S6_PORT || 27017,
        database: process.env.MONGO_S6_DATABASE || 's6-capturador',
        authSource: process.env.MONGO_S6_DB_AUTH || 'admin'
    }
};

log("config: ", config);
export default config;