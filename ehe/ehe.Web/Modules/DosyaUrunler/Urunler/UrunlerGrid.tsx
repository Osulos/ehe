import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { UrunlerColumns, UrunlerRow, UrunlerService } from '../../ServerTypes/DosyaUrunler';
import { UrunlerDialog } from './UrunlerDialog';

@Decorators.registerClass('ehe.DosyaUrunler.UrunlerGrid')
export class UrunlerGrid extends EntityGrid<UrunlerRow> {

    protected getColumnsKey() { return UrunlerColumns.columnsKey; }
    protected getDialogType() { return UrunlerDialog; }
    protected getRowDefinition() { return UrunlerRow; }
    protected getService() { return UrunlerService.baseUrl; }

  
    protected getButtons() {
        return null;
    }

}
