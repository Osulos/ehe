import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { UrunCesitleriForm, UrunCesitleriRow, UrunCesitleriService } from '../../ServerTypes/DosyaUrunler';

@Decorators.registerClass('ehe.DosyaUrunler.UrunCesitleriDialog')
export class UrunCesitleriDialog extends EntityDialog<UrunCesitleriRow, any> {
    protected getFormKey() { return UrunCesitleriForm.formKey; }
    protected getRowDefinition() { return UrunCesitleriRow; }
    protected getService() { return UrunCesitleriService.baseUrl; }

    
    //protected updateInterface(): void {
    //    super.updateInterface();
    //    this.deleteButton.hide();
    //    this.saveAndCloseButton.hide();
    //    this.applyChangesButton.hide();
    //    this.toolbar.findButton("extra-button-class").hide();
    //}
}