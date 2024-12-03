import { StringEditor, IntegerEditor, LookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { UrunCesitleriDialog } from "../../DosyaUrunler/UrunCesitleri/UrunCesitleriDialog";
import { UrunYeniGrid } from "../../DosyaUrunler/Urunler/UrunYeniGrid";

export interface UrunlerForm {
    UrunAdi: StringEditor;
    UrunAciklamasi: StringEditor;
    UrunStokAdeti: StringEditor;
    UrunFiyati: IntegerEditor;
    UrunKodu: StringEditor;
    UrunCesitleriid: LookupEditor;
    UrunYeniGrid: UrunYeniGrid;
}

export class UrunlerForm extends PrefixedContext {
    static readonly formKey = 'DosyaUrunler.Urunler';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!UrunlerForm.init)  {
            UrunlerForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = LookupEditor;
            var w3 = UrunYeniGrid;

            initFormType(UrunlerForm, [
                'UrunAdi', w0,
                'UrunAciklamasi', w0,
                'UrunStokAdeti', w0,
                'UrunFiyati', w1,
                'UrunKodu', w0,
                'UrunCesitleriid', w2,
                'UrunYeniGrid', w3
            ]);
        }
    }
}

queueMicrotask(() => [UrunCesitleriDialog]); // referenced dialogs