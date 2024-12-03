using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

[ConnectionKey("Default"), Module("DosyaUrunler"), TableName("UrunEkleme")]
[DisplayName("Urun Ekleme"), InstanceName("Urun Ekleme")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class UrunEklemeRow : Row<UrunEklemeRow.RowFields>, IIdRow, INameRow
{
    const string jUrunCesitleriid = nameof(jUrunCesitleriid);
    const string JId = nameof(JId);


    [Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }
    [DisplayName("Urun Id")] 
    public int? UrunlerId { get => fields.UrunlerId[this]; set => fields.UrunlerId[this] = value; }

    [DisplayName("Urun Adi"), Size(200), NotNull, QuickSearch, NameProperty]
    public string UrunAdi { get => fields.UrunAdi[this]; set => fields.UrunAdi[this] = value; }

    [DisplayName("Urun Aciklamasi"), Size(200), NotNull]
    public string UrunAciklamasi { get => fields.UrunAciklamasi[this]; set => fields.UrunAciklamasi[this] = value; }

    [DisplayName("Urun Stok Adeti"), NotNull]
    public int? UrunStokAdeti { get => fields.UrunStokAdeti[this]; set => fields.UrunStokAdeti[this] = value; }

    [DisplayName("Urun Fiyati"), NotNull]
    public int? UrunFiyati { get => fields.UrunFiyati[this]; set => fields.UrunFiyati[this] = value; }

    [DisplayName("Urun Kodu")]
    public string UrunKodu { get => fields.UrunKodu[this]; set => fields.UrunKodu[this] = value; }


    [DisplayName("Urun Cinsi"), ForeignKey("UrunCesitleri", "UrunCesitleriid"), LeftJoin(jUrunCesitleriid)]
    [LookupEditor(typeof(UrunCesitleriRow), DialogType = "DosyaUrunler.UrunCesitleri")]
     //,Async = true)
    public int? UrunCesitleriid { get => fields.UrunCesitleriid[this]; set => fields.UrunCesitleriid[this] = value; }


    [DisplayName("Urun Cinsleri"), Expression($"{jUrunCesitleriid}.[Ad]")]
    public string UrunCesitleriidAd { get => fields.UrunCesitleriidAd[this]; set => fields.UrunCesitleriidAd[this] = value; }

    [DisplayName("Kısa Ad"), Expression($"{jUrunCesitleriid}.[ShortName]"),MinSelectLevel(SelectLevel.Always)]
    public string UrunCesitleriShortName { get => fields.UrunCesitleriShortName[this]; set => fields.UrunCesitleriShortName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field UrunlerId;
        public StringField UrunAdi;
        public StringField UrunAciklamasi;
        public Int32Field UrunStokAdeti;
        public Int32Field UrunFiyati;
        public StringField UrunKodu;
        public Int32Field UrunCesitleriid;
        public StringField UrunCesitleriidAd;
        public StringField UrunCesitleriShortName;
    }
}