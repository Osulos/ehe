using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ehe.DosyaUrunler.UrunEklemeRow>;
using MyRow = ehe.DosyaUrunler.UrunEklemeRow;

namespace ehe.DosyaUrunler;

public interface IUrunEklemeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunEklemeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunEklemeRetrieveHandler
{
    public UrunEklemeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }

}