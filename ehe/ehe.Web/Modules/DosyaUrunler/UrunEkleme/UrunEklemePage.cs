using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace ehe.DosyaUrunler.Pages;

[PageAuthorize(typeof(UrunEklemeRow))]
public class UrunEklemePage : Controller
{
    [Route("DosyaUrunler/UrunEkleme")]
    public ActionResult Index()
    {
        return this.GridPage<UrunEklemeRow>("@/DosyaUrunler/UrunEkleme/UrunEklemePage");
    }
}