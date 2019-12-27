

$(document).ready(function () {
    $('#datatables').DataTable({

        dom: 'Bfrtip',
         buttons: [
            {   
                extend: 'excelHtml5',
                title: 'Terminología'
            }
            
        ],
    });
});







    
