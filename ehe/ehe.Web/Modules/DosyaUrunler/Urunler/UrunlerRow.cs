using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

[ConnectionKey("Default"), Module("DosyaUrunler"), TableName("Urunler")]
[DisplayName("Urunler"), InstanceName("Urunler")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]

[LookupScript("DosyaUrunler.Urunler")]

public sealed class UrunlerRow : Row<UrunlerRow.RowFields>, IIdRow, INameRow
{
    
    const string jUrunCesitleriid = nameof(jUrunCesitleriid);
    const string JKategoriidKategori = nameof(JKategoriidKategori);


    [Identity, IdProperty]
    public int? UrunlerId { get => fields.UrunlerId[this]; set => fields.UrunlerId[this] = value; }

    [DisplayName("Urun Adi"), Size(200), NotNull, QuickSearch, NameProperty, ReadOnly(true)]
    public string UrunAdi { get => fields.UrunAdi[this]; set => fields.UrunAdi[this] = value; }

    [DisplayName("Aciklamasi"), Size(200), NotNull, ReadOnly(true)]
    public string UrunAciklamasi { get => fields.UrunAciklamasi[this]; set => fields.UrunAciklamasi[this] = value; }

    [DisplayName("Stok"), Size(100), NotNull, ReadOnly(true)]
    public int? UrunStokAdeti { get => fields.UrunStokAdeti[this]; set => fields.UrunStokAdeti[this] = value; }

    [DisplayName("Urun Fiyati"), NotNull, ReadOnly(true)]
    public int? UrunFiyati { get => fields.UrunFiyati[this]; set => fields.UrunFiyati[this] = value; }

    [DisplayName("Urun Kodu"), ReadOnly(true)]
    public string UrunKodu { get => fields.UrunKodu[this]; set => fields.UrunKodu[this] = value; }

    [DisplayName("Urun Cinsi"), ForeignKey("UrunCesitleri", "UrunCesitleriid"), LeftJoin(jUrunCesitleriid), ReadOnly(true)]
    [LookupEditor(typeof(UrunCesitleriRow), DialogType = "DosyaUrunler.UrunCesitleri")]
    public int? UrunCesitleriid { get => fields.UrunCesitleriid[this]; set => fields.UrunCesitleriid[this] = value; }

    [DisplayName("Urun Cinsleri"), Expression($"{jUrunCesitleriid}.[Ad]")]
    public string UrunCesitleriidAd { get => fields.UrunCesitleriidAd[this]; set => fields.UrunCesitleriidAd[this] = value; }


    public class RowFields : RowFieldsBase
    {
        public Int32Field UrunlerId;
        public StringField UrunAdi;
        public StringField UrunAciklamasi;
        public Int32Field UrunStokAdeti;
        public Int32Field UrunFiyati;
        public StringField UrunKodu;
        public Int32Field UrunCesitleriid;
        public StringField UrunCesitleriidAd;
    }
}