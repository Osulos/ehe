using MovieTutorial.MovieDB;
using Serenity.ComponentModel;

namespace ehe.DosyaUrunler.Forms;

[FormScript("DosyaUrunler.UrunCesitleri")]
[BasedOnRow(typeof(UrunCesitleriRow), CheckNames = true)]
public class UrunCesitleriForm
{
    public string Ad { get; set; }
    public string ShortName { get; set; }
}