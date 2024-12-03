using Serenity.Demo.Northwind;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<ehe.DosyaUrunler.UrunlerRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ehe.DosyaUrunler.UrunlerRow;

namespace ehe.DosyaUrunler;

public interface IUrunlerSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunlerSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunlerSaveHandler
{
   
    public UrunlerSaveHandler(IRequestContext context) : base(context)
    {
    }

    protected override void BeforeSave()
    {
        base.BeforeSave();
    }

}