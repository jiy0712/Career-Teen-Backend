import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
export interface JwtPayload {
    sub: string;
    username: string;
    role: string;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: string;
        username: string;
        role: string;
    }>;
}
export {};
