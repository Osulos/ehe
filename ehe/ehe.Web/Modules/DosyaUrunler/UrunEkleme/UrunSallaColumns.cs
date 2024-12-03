using Serenity.ComponentModel;
using System.ComponentModel;

namespace ehe.DosyaUrunler.Columns;

[ColumnsScript("DosyaUrunler.UrunEkleme")]
[BasedOnRow(typeof(UrunEklemeRow), CheckNames = true)]
public class UrunSallaColumns //urun yeni grid burdan yapiliyo
{
    [EditLink]
    public int UrunlerId { get; set; }
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



}