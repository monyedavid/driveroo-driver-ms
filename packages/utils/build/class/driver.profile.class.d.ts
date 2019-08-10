export declare class DriverProfile {
    url?: string;
    constructor(url?: string);
    firstUpdate(params: DRIVER.IUpDriverParams, tokenValues: any): Promise<{
        path: string;
        message: string;
    }[] | {
        active: any;
        firstName: any;
        lastName: any;
        mobile: any;
        email: any;
        avatar: any;
        dob: any;
        mothers_maiden_name: any;
        primary_location: any;
        secondary_location: any;
        tertiary_location: any;
        bvn: any;
    }[]>;
    updateBvn(bvn: string): Promise<void>;
    updateLiveLocation(bvn: string): Promise<void>;
    updatePSTLocation(): Promise<void>;
    reviewDriver(): Promise<void>;
}
