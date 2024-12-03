using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

public partial class UrunYepyeniGridAttribute : CustomEditorAttribute
{
    public const string Key = "MovieTutorial.MovieDB.PersonMovieGrid";

    public UrunYepyeniGridAttribute()
        : base(Key)
    {
    }
}