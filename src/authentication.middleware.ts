import {Middleware, NestMiddleware, ExpressMiddleware} from '@nestjs/common';
import * as jwt from 'express-jwt';
import *  as jwks from 'jwks-rsa';

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return jwt({
            secret: (<any>jwks).expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: "https://jacruzca.auth0.com/.well-known/jwks.json"
            }),
            audience: 'http://localhost:3000/',
            issuer: "https://jacruzca.auth0.com/",
            algorithms: ['RS256']
        })
    }
}