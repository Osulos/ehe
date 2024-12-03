using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ehe.Administration.RoleRow>;
using MyRow = ehe.Administration.RoleRow;


namespace ehe.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}