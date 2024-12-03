import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { UrunEklemeForm, UrunEklemeRow, UrunEklemeService } from '../../ServerTypes/DosyaUrunler';

@Decorators.registerClass('ehe.DosyaUrunler.UrunEklemeDialog')
export class UrunEklemeDialog extends EntityDialog<UrunEklemeRow, any> {
    protected getFormKey() { return UrunEklemeForm.formKey; }
    protected getRowDefinition() { return UrunEklemeRow; }
    protected getService() { return UrunEklemeService.baseUrl; }

    protected form = new UrunEklemeForm(this.idPrefix);



    protected afterLoadEntity() {
        super.afterLoadEntity();
        this.form.UrunYeniGrid.UrunCesitleriid = this.entity.UrunCesitleriid;
    }

}