import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface UrunlerRow {
    UrunlerId?: number;
    UrunAdi?: string;
    UrunAciklamasi?: string;
    UrunStokAdeti?: number;
    UrunFiyati?: number;
    UrunKodu?: string;
    UrunCesitleriid?: number;
    UrunCesitleriidAd?: string;
}

export abstract class UrunlerRow {
    static readonly idProperty = 'UrunlerId';
    static readonly nameProperty = 'UrunAdi';
    static readonly localTextPrefix = 'DosyaUrunler.Urunler';
    static readonly lookupKey = 'DosyaUrunler.Urunler';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<UrunlerRow>('DosyaUrunler.Urunler') }
    static async getLookupAsync() { return getLookupAsync<UrunlerRow>('DosyaUrunler.Urunler') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<UrunlerRow>();
}