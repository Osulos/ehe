using Serenity.ComponentModel;
using System.ComponentModel;

namespace ehe.DosyaUrunler.Columns;

[ColumnsScript("DosyaUrunler.UrunEkleme")]
[BasedOnRow(typeof(UrunEklemeRow), CheckNames = true)]
public class UrunEklemeColumns
{
    [EditLink]
    public string UrunAdi { get; set; }
    [EditLink]
    public string UrunAciklamasi { get; set; }
    [EditLink]
    public int UrunStokAdeti { get; set; }
    [EditLink]
    public int UrunFiyati { get; set; }
    [EditLink]
    public string UrunKodu { get; set; }

    [QuickFilter, EditLink]
    public string UrunCesitleriidAd { get; set; }
}