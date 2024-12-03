using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace ehe.DosyaUrunler.Pages;

[PageAuthorize(typeof(UrunlerRow))]
public class UrunlerPage : Controller
{
    [Route("DosyaUrunler/Urunler")]
    public ActionResult Index()
    {
        return this.GridPage<UrunlerRow>("@/DosyaUrunler/Urunler/UrunlerPage");
    }
}