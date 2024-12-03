using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<ehe.DosyaUrunler.UrunCesitleriRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ehe.DosyaUrunler.UrunCesitleriRow;

namespace ehe.DosyaUrunler;

public interface IUrunCesitleriSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunCesitleriSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunCesitleriSaveHandler
{
    public UrunCesitleriSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}