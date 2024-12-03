import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { UrunCesitleriColumns, UrunCesitleriRow, UrunCesitleriService } from '../../ServerTypes/DosyaUrunler';
import { UrunCesitleriDialog } from './UrunCesitleriDialog';

@Decorators.registerClass('ehe.DosyaUrunler.UrunCesitleriGrid')
export class UrunCesitleriGrid extends EntityGrid<UrunCesitleriRow> {
    protected getColumnsKey() { return UrunCesitleriColumns.columnsKey; }
    protected getDialogType() { return UrunCesitleriDialog; }
    protected getRowDefinition() { return UrunCesitleriRow; }
    protected getService() { return UrunCesitleriService.baseUrl; }


}