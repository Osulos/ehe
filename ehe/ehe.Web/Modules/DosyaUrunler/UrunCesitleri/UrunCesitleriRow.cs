using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

[ConnectionKey("Default"), Module("DosyaUrunler"), TableName("UrunCesitleri")]
[DisplayName("Urun Cesitleri"), InstanceName("Urun Cesitleri")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]

[LookupScript]

public sealed class UrunCesitleriRow : Row<UrunCesitleriRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("id"), Identity, IdProperty]
    public int? UrunCesitleriid { get => fields.UrunCesitleriid[this]; set => fields.UrunCesitleriid[this] = value; }

    [DisplayName("Ad"), Size(100), NotNull, QuickSearch, NameProperty]
    public string Ad { get => fields.Ad[this]; set => fields.Ad[this] = value; }

    [DisplayName("Kısa Ad"), Size(3), NotNull, LookupInclude]
    public string ShortName { get => fields.ShortName[this]; set => fields.ShortName[this] = value; }


    public class RowFields : RowFieldsBase
    {
        public Int32Field UrunCesitleriid;
        public StringField Ad;
        public StringField ShortName;

    }
}