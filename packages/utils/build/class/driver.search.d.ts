/// <reference types="mongoose" />
export declare class DriverSearch {
    read({ query }: {
        query: any;
    }): Promise<import("mongoose").Document[] | {
        doc: import("mongoose").Document;
    }[]>;
}
