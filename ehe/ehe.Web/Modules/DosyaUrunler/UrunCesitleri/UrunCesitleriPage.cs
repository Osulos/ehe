using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace ehe.DosyaUrunler.Pages;

[PageAuthorize(typeof(UrunCesitleriRow))]
public class UrunCesitleriPage : Controller
{
    [Route("DosyaUrunler/UrunCesitleri")]
    public ActionResult Index()
    {
        return this.GridPage<UrunCesitleriRow>("@/DosyaUrunler/UrunCesitleri/UrunCesitleriPage");
    }
}