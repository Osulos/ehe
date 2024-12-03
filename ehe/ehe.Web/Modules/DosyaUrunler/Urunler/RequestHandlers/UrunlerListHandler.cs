using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ehe.DosyaUrunler.UrunlerRow>;
using MyRow = ehe.DosyaUrunler.UrunlerRow;

namespace ehe.DosyaUrunler;

public interface IUrunlerListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UrunlerListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUrunlerListHandler
{
    public UrunlerListHandler(IRequestContext context)
            : base(context)
    {
    }
}