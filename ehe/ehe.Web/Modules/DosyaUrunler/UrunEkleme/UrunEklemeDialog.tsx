import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { UrunCesitleriRow, UrunEklemeForm, UrunEklemeRow, UrunEklemeService } from '../../ServerTypes/DosyaUrunler';

@Decorators.registerClass('ehe.DosyaUrunler.UrunEklemeDialog')
export class UrunEklemeDialog extends EntityDialog<UrunEklemeRow, any> {
    protected getFormKey() { return UrunEklemeForm.formKey; }
    protected getRowDefinition() { return UrunEklemeRow; }
    protected getService() { return UrunEklemeService.baseUrl; }

    protected form = new UrunEklemeForm(this.idPrefix);

    constructor() {
        super();

        this.form.UrunCesitleriid.changeSelect2(e => {
            if (this.form.UrunCesitleriid.selectedItem) {
                this.form.UrunCesitleriShortName.value = (this.form.UrunCesitleriid.selectedItem as UrunCesitleriRow).ShortName;
            }
        });
    }


    protected afterLoadEntity() {
        super.afterLoadEntity();
        this.form.UrunYeniGrid.UrunCesitleriid = this.entity.UrunCesitleriid;
    }

}