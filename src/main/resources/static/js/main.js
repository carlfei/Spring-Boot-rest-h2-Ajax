$(document).ready(function () {

    $("#mi_form").submit(function (event) {

        
        event.preventDefault();

        mi_ajax();

    });

});

function mi_ajax() {

    var mi_var = {}
    mi_var["id"] = $("#mi_search").val();
//	$("#btn-search").prop("disabled", true);


if(mi_var["id"]==""){
    $.ajax({
	    type: "POST",
        contentType: "application/json",
        url: "/coches/all",
        data: JSON.stringify(mi_var),
        dataType: 'json',
        cache: false,
        timeout: 500000,
        success: function (data) {

            var json = "<h3>Tabla</h3><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#result').html(json);

         
        //    $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#result').html(json);

          
          //  $("#btn-search").prop("disabled", false);

        }
    });
}else{


$.ajax({
    
 	    type: "POST",
        contentType: "application/json",
        url: "/coches/search",
        data: JSON.stringify(mi_var),
        dataType: 'text',
        cache: false,
        timeout: 500000,
        success: function (data) {

            var json = "<h3>Tabla</h3><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#result').html(json);

         
         //   $("#btn-search").prop("disabled", false);
             $("#mi_search").val('');

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#result').html(json);
			 $("#btn-search").prop("disabled", false);

        }
        
       
    });
}
}