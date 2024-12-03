using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ehe.DosyaUrunler.UrunEklemeRow;

namespace ehe.DosyaUrunler;

public interface IUrunEklemeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class UrunEklemeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUrunEklemeDeleteHandler
{
    public UrunEklemeDeleteHandler(IRequestContext context)
            : base(context)
    {

    }

    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();
        if (Row.UrunlerId != null)
        {
            // Urunler tablosundan kaydı sil
            var urunlerRepository = new UrunlerDeleteHandler(Context).Delete(
                UnitOfWork,
                new DeleteRequest
                {
                    EntityId = Row.UrunlerId
                });
        }

        // Ek silme kontrolleri veya iş mantıkları eklemek isterseniz buraya yazabilirsiniz.
        // Örneğin, bağlı verileri kontrol etmek veya özel doğrulamalar yapmak.
    }

    
}

    