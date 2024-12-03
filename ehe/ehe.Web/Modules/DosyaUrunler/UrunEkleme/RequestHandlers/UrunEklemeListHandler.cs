using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ehe.DosyaUrunler.UrunEklemeRow>;
using MyRow = ehe.DosyaUrunler.UrunEklemeRow;

namespace ehe.DosyaUrunler;

public interface IUrunEklemeListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UrunEklemeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUrunEklemeListHandler
{
    public UrunEklemeListHandler(IRequestContext context)
            : base(context)
    {
    }

}