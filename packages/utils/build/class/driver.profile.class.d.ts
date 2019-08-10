export declare class DriverProfile {
    url?: string;
    constructor(url?: string);
    updateBvn(bvn: string): Promise<void>;
    updateLiveLocation(bvn: string): Promise<void>;
    updatePSTLocation(): Promise<void>;
    reviewDriver(): Promise<void>;
}
