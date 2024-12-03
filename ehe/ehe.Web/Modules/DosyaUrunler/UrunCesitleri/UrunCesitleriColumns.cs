using Serenity.ComponentModel;
using System.ComponentModel;

namespace ehe.DosyaUrunler.Columns;

[ColumnsScript("DosyaUrunler.UrunCesitleri")]
[BasedOnRow(typeof(UrunCesitleriRow), CheckNames = true)]
public class UrunCesitleriColumns
{
    [EditLink]
    public string Ad { get; set; }
}