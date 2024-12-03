import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { UrunEklemeRow } from "./UrunEklemeRow";

export namespace UrunEklemeService {
    export const baseUrl = 'DosyaUrunler/UrunEkleme';

    export declare function Create(request: SaveRequest<UrunEklemeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<UrunEklemeRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<UrunEklemeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<UrunEklemeRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<UrunEklemeRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<UrunEklemeRow>>;

    export const Methods = {
        Create: "DosyaUrunler/UrunEkleme/Create",
        Update: "DosyaUrunler/UrunEkleme/Update",
        Delete: "DosyaUrunler/UrunEkleme/Delete",
        Retrieve: "DosyaUrunler/UrunEkleme/Retrieve",
        List: "DosyaUrunler/UrunEkleme/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>UrunEklemeService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}