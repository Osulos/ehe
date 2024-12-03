using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRow = ehe.DosyaUrunler.UrunlerRow;

namespace ehe.DosyaUrunler.Endpoints;

[Route("Services/DosyaUrunler/Urunler/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class UrunlerEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IUrunlerSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IUrunlerSaveHandler handler)
    {
        return handler.Update(uow, request);
    }
 
    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] IUrunlerDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IUrunlerRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IUrunlerListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
        [FromServices] IUrunlerListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var bytes = exporter.Export(data, typeof(Columns.UrunlerColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "UrunlerList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }






    
    //[HttpPost, Authorize]
    //public ServiceResponse AzaltStok(IDbConnection connection, ReduceStockRequest request)
    //{
    //var urun = connection.ById<UrunlerRow>(request.UrunlerId);
    //if (urun == null)
    //throw new ValidationError("Geçersiz ürün ID");

    //if (urun.UrunStokAdeti < request.Miktar)
    //throw new ValidationError("Yeterli stok yok");

    //urun.UrunStokAdeti -= request.Miktar;
    //connection.UpdateById(urun);

    //return new ServiceResponse();
    
    //}

    //public class ReduceStockRequest : ServiceRequest
    //{
    //public int UrunlerId { get; set; }
    //public int Miktar { get; set; }
    //}
}