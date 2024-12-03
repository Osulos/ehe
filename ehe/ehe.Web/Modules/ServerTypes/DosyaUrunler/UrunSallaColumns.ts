import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { UrunEklemeRow } from "./UrunEklemeRow";

export interface UrunSallaColumns {
    UrunlerId: Column<UrunEklemeRow>;
    UrunAdi: Column<UrunEklemeRow>;
    UrunAciklamasi: Column<UrunEklemeRow>;
    UrunStokAdeti: Column<UrunEklemeRow>;
    UrunFiyati: Column<UrunEklemeRow>;
    UrunKodu: Column<UrunEklemeRow>;
}

export class UrunSallaColumns extends ColumnsBase<UrunEklemeRow> {
    static readonly columnsKey = 'DosyaUrunler.UrunEkleme';
    static readonly Fields = fieldsProxy<UrunSallaColumns>();
}