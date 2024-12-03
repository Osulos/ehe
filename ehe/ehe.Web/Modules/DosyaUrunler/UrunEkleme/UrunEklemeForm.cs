using Serenity.ComponentModel;

namespace ehe.DosyaUrunler.Forms;

[FormScript("DosyaUrunler.UrunEkleme")]
[BasedOnRow(typeof(UrunEklemeRow), CheckNames = true)]
public class UrunEklemeForm
{
    public string UrunAdi { get; set; }
    public string UrunAciklamasi { get; set; }
    public int UrunStokAdeti { get; set; }
    public int UrunFiyati { get; set; }
    public string UrunKodu { get; set; }
    public int UrunCesitleriid { get; set; }


    [Visible(false)]
    public string UrunCesitleriShortName { get; set; }

    [IgnoreName, UrunYeniGrid]
    public string UrunYeniGrid { get; set; }

}