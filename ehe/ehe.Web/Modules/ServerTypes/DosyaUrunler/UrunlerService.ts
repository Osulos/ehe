import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, ServiceResponse, serviceRequest } from "@serenity-is/corelib";
import { ReduceStockRequest } from "./ReduceStockRequest";
import { UrunlerRow } from "./UrunlerRow";

export namespace UrunlerService {
    export const baseUrl = 'DosyaUrunler/Urunler';

    export declare function Create(request: SaveRequest<UrunlerRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<UrunlerRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<UrunlerRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<UrunlerRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<UrunlerRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<UrunlerRow>>;
    export declare function AzaltStok(request: ReduceStockRequest, onSuccess?: (response: ServiceResponse) => void, opt?: ServiceOptions<any>): PromiseLike<ServiceResponse>;

    export const Methods = {
        Create: "DosyaUrunler/Urunler/Create",
        Update: "DosyaUrunler/Urunler/Update",
        Delete: "DosyaUrunler/Urunler/Delete",
        Retrieve: "DosyaUrunler/Urunler/Retrieve",
        List: "DosyaUrunler/Urunler/List",
        AzaltStok: "DosyaUrunler/Urunler/AzaltStok"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'AzaltStok'
    ].forEach(x => {
        (<any>UrunlerService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}