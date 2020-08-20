declare namespace Express {
    export interface IRequest {
        user: {
            id: string;
        };
    }
}

declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
        user: {
            id: string;
        };
    }
}
