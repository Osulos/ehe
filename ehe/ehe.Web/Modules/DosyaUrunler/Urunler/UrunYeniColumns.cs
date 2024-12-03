namespace ehe.DosyaUrunler.UrunYeniColumns;

[ColumnsScript]
[BasedOnRow(typeof(UrunlerRow))]
public class UrunYeniColumns
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