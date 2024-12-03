using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

public partial class UrunKategoriGridAttribute : CustomEditorAttribute
{
    public const string Key = "ehe.DosyaUrunler.UrunKategoriGrid";

    public UrunKategoriGridAttribute()
        : base(Key)
    {
    }
}