using Serenity.Extensions.Entities;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<ehe.DosyaUrunler.UrunEklemeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ehe.DosyaUrunler.UrunEklemeRow;

namespace ehe.DosyaUrunler;

public interface IUrunEklemeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class UrunEklemeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUrunEklemeSaveHandler
{
    public UrunEklemeSaveHandler(IRequestContext context)
            : base(context)
    {

    }



    protected override void BeforeSave()
    {
        base.BeforeSave();

        // UrunlerRow için bir nesne oluştur
        var urunlerRow = new UrunlerRow
        {
            UrunAdi = Row.UrunAdi, // UrunEklemeRow'daki "Ad" alanını kullanıyoruz
            UrunAciklamasi = Row.UrunAciklamasi,
            UrunStokAdeti = Row.UrunStokAdeti,
            UrunFiyati = Row.UrunFiyati,
            UrunKodu = Row.UrunKodu,
            UrunCesitleriid = Row.UrunCesitleriid, // UrunCesitleriid eşleşiyor
                                                   // Gerekirse diğer alanları da buraya ekleyin
        };


        if (this.IsCreate) // Sadece yeni kayıt yapıldığında
        {

            // Urunler tablosuna yeni kayıt ekle
            var urunlerRepository = new UrunlerSaveHandler(Context).Create(
                UnitOfWork,
                new SaveRequest<UrunlerRow>()
                {
                    Entity = urunlerRow
                });
            Row.UrunlerId = Convert.ToInt32(urunlerRepository.EntityId);
        }

        else if (this.IsUpdate)
        {
            // Urunler tablosuna yeni kayıt ekle
            var urunlerRepository = new UrunlerSaveHandler(Context).Update(
                UnitOfWork,
                new SaveRequest<UrunlerRow>()
                {
                    EntityId = Row.UrunlerId,
                    Entity = urunlerRow
                });
        }

        

    }
}