function successMessage(message)
{
    $("#headMessagediv").addClass("alert alert-success");
     $("#headMessagediv").append(message);
     $("#headMessagediv").delay(1000).fadeOut('slow');
}


function errorMessage(message)
{
    $("#headMessagediv").addClass("alert alert-danger");
     $("#headMessagediv").append(message);
}

function pageSuccessMessage(message,id)
{
    
     $("#"+id).addClass("alert alert-success");
     $("#"+id).append(message);
     $("#"+id).delay(1000).fadeOut('slow');
}


function pageErrorMessage(message,id)
{
     $("#"+id).addClass("alert alert-danger");
     $("#"+id).append(message);
}


function confirmatioCustomClickModalMessage(message,id)
{                      $('#confirmationModal').modal('show');
                    $('#confirmationModal').find('.modal-body').html(message);
					 $("#wrapper").css("height","1368px;");
					$("#page-content-wrapper").css("height","auto");
					$(".form-section-container").css("height","auto");
					$('#confirmationModal').find('.btn-primary').attr("id",id);
}

function modalMessage(message)
{                      $('#messageModal').modal('show');
                    $('#messageModal').find('.modal-body').html(message);
					 $("#wrapper").css("height","1368px;");
					$("#page-content-wrapper").css("height","auto");
					$(".form-section-container").css("height","auto");
                   setTimeout(function(){  $('#messageModal').modal('hide'); }, 2000);
}
function hideModal()
{   
    $('#confirmationModal').modal('hide');
   // ('#confirmationModal').modal('hide');
}