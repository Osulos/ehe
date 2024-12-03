import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { UrunEklemeRow } from "./UrunEklemeRow";

export interface UrunEklemeColumns {
    UrunAdi: Column<UrunEklemeRow>;
    UrunAciklamasi: Column<UrunEklemeRow>;
    UrunStokAdeti: Column<UrunEklemeRow>;
    UrunFiyati: Column<UrunEklemeRow>;
    UrunKodu: Column<UrunEklemeRow>;
    UrunCesitleriidAd: Column<UrunEklemeRow>;
}

export class UrunEklemeColumns extends ColumnsBase<UrunEklemeRow> {
    static readonly columnsKey = 'DosyaUrunler.UrunEkleme';
    static readonly Fields = fieldsProxy<UrunEklemeColumns>();
}