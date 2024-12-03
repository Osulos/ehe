using Serenity.ComponentModel;
using System.ComponentModel;

namespace ehe.DosyaUrunler.Columns;

[ColumnsScript("DosyaUrunler.Urunler")]
[BasedOnRow(typeof(UrunlerRow), CheckNames = true)]
public class UrunlerColumns
{
    //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    //public int UrunlerId { get; set; }
    [EditLink]
    public string UrunAdi { get; set; }
    [EditLink]
    public string UrunAciklamasi { get; set; }
    [EditLink]
    public int UrunStokAdeti { get; set; }
    [EditLink]
    public int UrunFiyati { get; set; }
    [EditLink]
    public int UrunKodu { get; set; }

    [QuickFilter, EditLink]
    public string UrunCesitleriidAd { get; set; }
   

}