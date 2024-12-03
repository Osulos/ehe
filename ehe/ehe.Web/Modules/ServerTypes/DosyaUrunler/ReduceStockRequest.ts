import { ServiceRequest } from "@serenity-is/corelib";

export interface ReduceStockRequest extends ServiceRequest {
    UrunlerId?: number;
    Miktar?: number;
}