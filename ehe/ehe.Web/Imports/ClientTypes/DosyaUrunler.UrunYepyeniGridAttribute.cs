using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

public partial class UrunYepyeniGridAttribute : CustomEditorAttribute
{
    public const string Key = "ehe.DosyaUrunler.UrunYeniGrid";

    public UrunYepyeniGridAttribute()
        : base(Key)
    {
    }
}