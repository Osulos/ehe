import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { UrunlerRow } from "./UrunlerRow";

export interface UrunYeniColumns {
    UrunlerId: Column<UrunlerRow>;
    UrunAdi: Column<UrunlerRow>;
    UrunAciklamasi: Column<UrunlerRow>;
    UrunStokAdeti: Column<UrunlerRow>;
    UrunFiyati: Column<UrunlerRow>;
    UrunKodu: Column<UrunlerRow>;
}

export class UrunYeniColumns extends ColumnsBase<UrunlerRow> {
    static readonly columnsKey = 'ehe.DosyaUrunler.UrunYeniColumns.UrunYeniColumns';
    static readonly Fields = fieldsProxy<UrunYeniColumns>();
}