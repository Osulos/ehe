import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { UrunlerRow } from "./UrunlerRow";

export interface UrunlerColumns {
    UrunAdi: Column<UrunlerRow>;
    UrunAciklamasi: Column<UrunlerRow>;
    UrunStokAdeti: Column<UrunlerRow>;
    UrunFiyati: Column<UrunlerRow>;
    UrunKodu: Column<UrunlerRow>;
    UrunCesitleriidAd: Column<UrunlerRow>;
}

export class UrunlerColumns extends ColumnsBase<UrunlerRow> {
    static readonly columnsKey = 'DosyaUrunler.Urunler';
    static readonly Fields = fieldsProxy<UrunlerColumns>();
}