import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GridEditorDialog } from "@serenity-is/extensions";
import { UrunlerForm, UrunlerRow, UrunlerService } from '../../ServerTypes/DosyaUrunler';

@Decorators.panel()
@Decorators.registerClass('ehe.DosyaUrunler.UrunlerDialog')
export class UrunlerDialog extends EntityDialog<UrunlerRow, any> {
    protected getFormKey() { return UrunlerForm.formKey; }
    protected getRowDefinition() { return UrunlerRow; }
    protected getService() { return UrunlerService.baseUrl; }
   


    protected form = new UrunlerForm(this.idPrefix);
    protected afterLoadEntity() {
        super.afterLoadEntity();
        this.form.UrunYeniGrid.UrunCesitleriid = this.entity.UrunCesitleriid;
    }



    protected updateInterface(): void {
        super.updateInterface();
        this.deleteButton.hide();
        this.saveAndCloseButton.hide();
        this.applyChangesButton.hide();
        this.toolbar.findButton("extra-button-class").hide();
    }




}









