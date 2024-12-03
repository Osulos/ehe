import { fieldsProxy } from "@serenity-is/corelib";

export interface UrunEklemeRow {
    Id?: number;
    UrunlerId?: number;
    UrunAdi?: string;
    UrunAciklamasi?: string;
    UrunStokAdeti?: number;
    UrunFiyati?: number;
    UrunKodu?: string;
    UrunCesitleriid?: number;
    UrunCesitleriidAd?: string;
    UrunCesitleriShortName?: string;
}

export abstract class UrunEklemeRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'UrunAdi';
    static readonly localTextPrefix = 'DosyaUrunler.UrunEkleme';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<UrunEklemeRow>();
}