      var progreso = 0;
      var idIterval = setInterval(function(){
        // Aumento en 10 el progeso
        progreso +=9;
        $('#bar').css('width', progreso + '%');
       
      //Si llegó a 100 elimino el interval
        if(progreso == 100){
       clearInterval(idIterval);
      }
      },1000);