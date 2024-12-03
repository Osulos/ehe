import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { UrunEklemeColumns, UrunEklemeRow, UrunEklemeService } from '../../ServerTypes/DosyaUrunler';
import { UrunEklemeDialog } from './UrunEklemeDialog';

@Decorators.registerClass('ehe.DosyaUrunler.UrunEklemeGrid')
export class UrunEklemeGrid extends EntityGrid<UrunEklemeRow> {
    protected getColumnsKey() { return UrunEklemeColumns.columnsKey; }
    protected getDialogType() { return UrunEklemeDialog; }
    protected getRowDefinition() { return UrunEklemeRow; }
    protected getService() { return UrunEklemeService.baseUrl; }


}