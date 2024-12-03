using MyRequest = Serenity.Services.SaveRequest<ehe.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ehe.Administration.LanguageRow;


namespace ehe.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}