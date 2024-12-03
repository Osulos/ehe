using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace ehe.DosyaUrunler;

public partial class AlternatifEditorAttribute : CustomEditorAttribute
{
    public const string Key = "ehe.DosyaUrunler.Alternatif";

    public AlternatifEditorAttribute()
        : base(Key)
    {
    }
}