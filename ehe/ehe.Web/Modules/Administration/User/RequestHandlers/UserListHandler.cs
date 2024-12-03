using MyRequest = ehe.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<ehe.Administration.UserRow>;
using MyRow = ehe.Administration.UserRow;

namespace ehe.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}