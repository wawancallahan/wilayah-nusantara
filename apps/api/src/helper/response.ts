import { randomUUID } from "crypto";
// generate function to build response structure
export interface ResponseData {
    data_header: {
        status: string;
        message: string;
        time_stamp: string;
        trace_code: string;
    };
    data_body: any;
}

export function generateResponse(message: string, dataBody: any, status: number): ResponseData {
    const currentTimeStamp: string = new Date().toISOString();
    const traceCode: string = generateTraceCode(); // Assuming a function to generate trace codes

    var ok = "OK"
    if (status !== 200) {
        ok = "FAILED"
    }

    const responseData: ResponseData = {
        data_header: {
            status: ok,
            message: message,
            time_stamp: currentTimeStamp,
            trace_code: traceCode
        },
        data_body: dataBody
    };

    return responseData;
}

function generateTraceCode(): string {
    // generate UUID
    return randomUUID();
}
