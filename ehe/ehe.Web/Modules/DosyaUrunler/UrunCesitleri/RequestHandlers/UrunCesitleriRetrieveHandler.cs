using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ehe.DosyaUrunler.UrunCesitleriRow>;
using MyRow = ehe.DosyaUrunler.UrunCesitleriRow;

namespace ehe.DosyaUrunler;

public interface IUrunCesitleriRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunCesitleriRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunCesitleriRetrieveHandler
{
    public UrunCesitleriRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}