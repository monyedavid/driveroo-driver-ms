import { Redis } from "ioredis";
interface DecodeRegisterToken {
    invalid: boolean;
    decodedvalue?: any;
}
export declare const decodeRegToken: (encrypt_id: string, redis?: Redis) => Promise<DecodeRegisterToken>;
export {};
