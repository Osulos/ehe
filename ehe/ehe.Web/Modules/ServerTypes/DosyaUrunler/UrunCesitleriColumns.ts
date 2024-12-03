import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { UrunCesitleriRow } from "./UrunCesitleriRow";

export interface UrunCesitleriColumns {
    Ad: Column<UrunCesitleriRow>;
}

export class UrunCesitleriColumns extends ColumnsBase<UrunCesitleriRow> {
    static readonly columnsKey = 'DosyaUrunler.UrunCesitleri';
    static readonly Fields = fieldsProxy<UrunCesitleriColumns>();
}