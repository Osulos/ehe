using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ehe.DosyaUrunler.UrunCesitleriRow;

namespace ehe.DosyaUrunler;

public interface IUrunCesitleriDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class UrunCesitleriDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUrunCesitleriDeleteHandler
{
    public UrunCesitleriDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}