using Serenity.ComponentModel;

namespace ehe.DosyaUrunler.Forms;



[FormScript("DosyaUrunler.Urunler")] 
[BasedOnRow(typeof(UrunlerRow), CheckNames = true)]
[ColumnsScript]


public class UrunlerForm
{
    
    public string UrunAdi { get; set; }
    public string UrunAciklamasi { get; set; }
    public int UrunStokAdeti { get; set; }
    public int UrunFiyati { get; set; }
    public int UrunKodu { get; set; }
    public int UrunCesitleriid { get; set; }


    [IgnoreName, UrunYeniGrid]
    public string UrunYeniGrid { get; set; }







}