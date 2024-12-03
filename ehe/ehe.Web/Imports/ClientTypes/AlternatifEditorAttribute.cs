using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace ehe;

public partial class AlternatifEditorAttribute : CustomEditorAttribute
{
    public const string Key = "/Modules/DosyaUrunler/Urunler/UrunlerGrid:AlternatifEditor";

    public AlternatifEditorAttribute()
        : base(Key)
    {
    }
}