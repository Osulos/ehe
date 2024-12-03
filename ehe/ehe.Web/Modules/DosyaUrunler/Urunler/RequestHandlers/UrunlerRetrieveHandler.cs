using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ehe.DosyaUrunler.UrunlerRow>;
using MyRow = ehe.DosyaUrunler.UrunlerRow;

namespace ehe.DosyaUrunler;

public interface IUrunlerRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunlerRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunlerRetrieveHandler
{
    public UrunlerRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}