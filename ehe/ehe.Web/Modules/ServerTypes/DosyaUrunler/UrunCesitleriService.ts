import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { UrunCesitleriRow } from "./UrunCesitleriRow";

export namespace UrunCesitleriService {
    export const baseUrl = 'DosyaUrunler/UrunCesitleri';

    export declare function Create(request: SaveRequest<UrunCesitleriRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<UrunCesitleriRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<UrunCesitleriRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<UrunCesitleriRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<UrunCesitleriRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<UrunCesitleriRow>>;

    export const Methods = {
        Create: "DosyaUrunler/UrunCesitleri/Create",
        Update: "DosyaUrunler/UrunCesitleri/Update",
        Delete: "DosyaUrunler/UrunCesitleri/Delete",
        Retrieve: "DosyaUrunler/UrunCesitleri/Retrieve",
        List: "DosyaUrunler/UrunCesitleri/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>UrunCesitleriService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}