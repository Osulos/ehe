import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface UrunCesitleriForm {
    Ad: StringEditor;
    ShortName: StringEditor;
}

export class UrunCesitleriForm extends PrefixedContext {
    static readonly formKey = 'DosyaUrunler.UrunCesitleri';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!UrunCesitleriForm.init)  {
            UrunCesitleriForm.init = true;

            var w0 = StringEditor;

            initFormType(UrunCesitleriForm, [
                'Ad', w0,
                'ShortName', w0
            ]);
        }
    }
}