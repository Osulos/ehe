using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ehe.DosyaUrunler.UrunCesitleriRow>;
using MyRow = ehe.DosyaUrunler.UrunCesitleriRow;

namespace ehe.DosyaUrunler;

public interface IUrunCesitleriListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UrunCesitleriListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUrunCesitleriListHandler
{
    public UrunCesitleriListHandler(IRequestContext context)
            : base(context)
    {
    }
}