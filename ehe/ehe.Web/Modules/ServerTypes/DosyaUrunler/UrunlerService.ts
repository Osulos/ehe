import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { UrunlerRow } from "./UrunlerRow";

export namespace UrunlerService {
    export const baseUrl = 'DosyaUrunler/Urunler';

    export declare function Create(request: SaveRequest<UrunlerRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<UrunlerRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<UrunlerRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<UrunlerRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<UrunlerRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<UrunlerRow>>;

    export const Methods = {
        Create: "DosyaUrunler/Urunler/Create",
        Update: "DosyaUrunler/Urunler/Update",
        Delete: "DosyaUrunler/Urunler/Delete",
        Retrieve: "DosyaUrunler/Urunler/Retrieve",
        List: "DosyaUrunler/Urunler/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>UrunlerService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}