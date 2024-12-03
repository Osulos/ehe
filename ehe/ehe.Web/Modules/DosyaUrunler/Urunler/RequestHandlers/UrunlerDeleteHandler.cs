using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ehe.DosyaUrunler.UrunlerRow;

namespace ehe.DosyaUrunler;

public interface IUrunlerDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class UrunlerDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUrunlerDeleteHandler
{

    public UrunlerDeleteHandler(IRequestContext context)
        : base(context)
    {

    }

    
}