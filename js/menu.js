var fase_fliperama_completa = true;
var fase_supermercado_completa = true;
var fase_casa_completa = true;
var fase_sorveteria_completa = true;
var fase_escola_completa = true;
var fases_completas = true;
$(document).ready(function(){
    $("#escola").mouseover(function(){
        $("#pin_escola").css("display", "block");
    });
    $("#escola").mouseout(function(){
        $("#pin_escola").css("display", "none");
    });

    $("#supermercado").mouseover(function(){
        $("#pin_supermercado").css("display", "block");
    });
    $("#supermercado").mouseout(function(){
        $("#pin_supermercado").css("display", "none");
    });

    $("#fliperama").mouseover(function(){
        $("#pin_fliperama").css("display", "block");
    });

    $("#fliperama").mouseout(function(){
        $("#pin_fliperama").css("display", "none");
    });

    $("#sorveteria").mouseover(function(){
        $("#pin_sorveteria").css("display", "block");
    });

    $("#sorveteria").mouseout(function(){
        $("#pin_sorveteria").css("display", "none");
    });
    $("#casa").mouseover(function(){
        $("#pin_casa").css("display", "block");
    });

    $("#casa").mouseout(function(){
        $("#pin_casa").css("display", "none");
    });
    $("#parque").mouseover(function(){
        $("#pin_parque").css("display", "block");
    });

    $("#parque").mouseout(function(){
        $("#pin_parque").css("display", "none");
    });
    $("#praca").mouseover(function(){
        $("#pin_praca").css("display", "block");
    });

    $("#praca").mouseout(function(){
        $("#pin_praca").css("display", "none");
    });
});