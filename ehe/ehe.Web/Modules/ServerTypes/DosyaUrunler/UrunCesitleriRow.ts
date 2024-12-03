import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface UrunCesitleriRow {
    UrunCesitleriid?: number;
    Ad?: string;
    ShortName?: string;
}

export abstract class UrunCesitleriRow {
    static readonly idProperty = 'UrunCesitleriid';
    static readonly nameProperty = 'Ad';
    static readonly localTextPrefix = 'DosyaUrunler.UrunCesitleri';
    static readonly lookupKey = 'DosyaUrunler.UrunCesitleri';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<UrunCesitleriRow>('DosyaUrunler.UrunCesitleri') }
    static async getLookupAsync() { return getLookupAsync<UrunCesitleriRow>('DosyaUrunler.UrunCesitleri') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<UrunCesitleriRow>();
}