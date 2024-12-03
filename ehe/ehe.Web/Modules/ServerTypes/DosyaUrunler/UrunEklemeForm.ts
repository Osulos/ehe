import { StringEditor, IntegerEditor, LookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { UrunCesitleriDialog } from "../../DosyaUrunler/UrunCesitleri/UrunCesitleriDialog";
import { UrunYeniGrid } from "../../DosyaUrunler/Urunler/UrunYeniGrid";

export interface UrunEklemeForm {
    UrunAdi: StringEditor;
    UrunAciklamasi: StringEditor;
    UrunStokAdeti: IntegerEditor;
    UrunFiyati: IntegerEditor;
    UrunKodu: IntegerEditor;
    UrunCesitleriid: LookupEditor;
    UrunYeniGrid: UrunYeniGrid;
}

export class UrunEklemeForm extends PrefixedContext {
    static readonly formKey = 'DosyaUrunler.UrunEkleme';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!UrunEklemeForm.init)  {
            UrunEklemeForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = LookupEditor;
            var w3 = UrunYeniGrid;

            initFormType(UrunEklemeForm, [
                'UrunAdi', w0,
                'UrunAciklamasi', w0,
                'UrunStokAdeti', w1,
                'UrunFiyati', w1,
                'UrunKodu', w1,
                'UrunCesitleriid', w2,
                'UrunYeniGrid', w3
            ]);
        }
    }
}

queueMicrotask(() => [UrunCesitleriDialog]); // referenced dialogs