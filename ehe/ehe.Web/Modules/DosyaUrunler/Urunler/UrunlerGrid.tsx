import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { UrunlerColumns, UrunlerRow, UrunlerService } from '../../ServerTypes/DosyaUrunler';
import { UrunlerDialog } from './UrunlerDialog';

@Decorators.registerClass('ehe.DosyaUrunler.UrunlerGrid')
export class UrunlerGrid extends EntityGrid<UrunlerRow> {

    protected getColumnsKey() { return UrunlerColumns.columnsKey; }
    protected getDialogType() { return UrunlerDialog; }
    protected getRowDefinition() { return UrunlerRow; }
    protected getService() { return UrunlerService.baseUrl; }

  
    //protected getButtons() {
    //    return null;
    //}
    protected getButtons() {
        let buttons = super.getButtons();

        buttons.push({
            title: 'Stok Azalt',
            cssClass: 'apply-changes-button',
            onClick: () => {
                let id = this.rowSelection.getSelectedKeys()[0]; // Seçili satır ID'sini al
                if (!id) {
                    Q.notifyError('Lütfen bir ürün seçin!');
                    return;
                }

                Q.prompt('Azaltılacak miktarı girin:', '', (value) => {
                    let miktar = parseInt(value);
                    if (isNaN(miktar) || miktar <= 0) {
                        Q.notifyError('Geçerli bir miktar girin.');
                        return;
                    }

                    UrunlerService.AzaltStok({
                        UrunlerId: id,
                        Miktar: miktar
                    }, response => {
                        Q.notifySuccess('Stok başarıyla azaltıldı!');
                        this.refresh();
                    });
                });
            }
        });

        return buttons;
    }
}
