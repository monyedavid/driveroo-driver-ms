import { verify } from "jsonwebtoken";
import { Redis } from "ioredis";

interface DecodeRegisterToken {
    invalid: boolean;
    decodedvalue?: any;
}

export const decodeRegToken = async (encrypt_id: string, redis?: Redis) => {
    let CRID = encrypt_id;
    if (redis) {
        CRID = await redis.get(encrypt_id);
    }
    try {
        const decodedvalue: any = await verify(CRID, process.env
            .MICROSERVICE_TOKEN_SECRET as string);
        const returnValue: DecodeRegisterToken = {
            invalid: false,
            decodedvalue
        };
        return returnValue;
    } catch (err) {
        return { invalid: true };
    }
};
