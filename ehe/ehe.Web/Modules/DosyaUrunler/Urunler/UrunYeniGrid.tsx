import { Decorators, EntityGrid, WidgetProps } from "@serenity-is/corelib";
import { UrunYeniColumns, UrunlerRow, UrunlerService } from '../../ServerTypes/DosyaUrunler';
import { UrunlerDialog } from "./UrunlerDialog";

@Decorators.registerEditor("ehe.DosyaUrunler.UrunYeniGrid")
export class UrunYeniGrid<P = {}> extends EntityGrid<UrunlerRow, P> {
    //protected getColumnsKey() { return UrunlerColumns.columnsKey; }
    protected getColumnsKey() { return UrunYeniColumns.columnsKey; }
    protected getDialogType() { return UrunlerDialog; } // Hangi dialogun açılacağını burada belirtiyoruz
    protected getIdProperty() { return UrunlerRow.idProperty; }
    protected getLocalTextPrefix() { return UrunlerRow.localTextPrefix; }

    protected getRowDefinition() { return UrunlerRow; }
    protected getService() { return UrunlerService.baseUrl; }


    constructor(props: WidgetProps<P>) {
        super(props);
    }
    protected getButtons() {
        return null;
    }
    protected getInitialTitle() {
        return null;
    }
    protected usePager() {
        return false;
    }


    protected getGridCanLoad() {
        return this.UrunCesitleriid != null;
    }
    private _UrunCesitleriid: number;
    get UrunCesitleriid() {
        return this._UrunCesitleriid;
    }
    set UrunCesitleriid(value: number) {
        if (this._UrunCesitleriid != value) {
            this._UrunCesitleriid = value;
            this.setEquality(UrunlerRow.Fields.UrunCesitleriid, value);
            this.refresh();
        }
    }


}