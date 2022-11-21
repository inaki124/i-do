var nombre_alumno_array=[];
 
 function submit()
 {

    var display_student_array =[];

    for (var j=1; j<=4; j++)
     {
        var name_of_the_student = document.getElementById("nombre_alumno_"+j).value;
        console.log(name_of_the_student);
        nombre_alumno_array.push(name_of_the_student);
     }

     console.log(nombre_alumno_array);

     var asado= nombre_alumno_array.length;
     console.log(asado);

     for (var k=0; k < asado; k++)
     {
        display_student_array.push("<h4>NAME-"+ nombre_alumno_array[k]+ "</h4>" );
        console.log(display_student_array);
     }

     console.log(display_student_array);
     document.getElementById("mostrar_nombres_con_comas").innerHTML = display_student_array;

     var remove_comas = display_student_array.join(" ");
     console.log(remove_comas);
     document.getElementById("mostrar_nombres_sin_comas").innerHTML=remove_comas;

     document.getElementById("enviar").style.display="none";
     document.getElementById("ordenar").style.display="inline-block";
    
    }  
    
    function Pisa()
    {
        nombre_alumno_array.sort();
        console.log(nombre_alumno_array);

        var display_student_array_sorting=[];

        var asado=nombre_alumno_array.length;
        console.log(asado);

        for( var k=0; k <asado; k++)
        {
            display_student_array_sorting.push("<h4>NAME -" + nombre_alumno_array[k] + "</h4>");
            console.log(display_student_array_sorting);
        }
//"+" = cadena
         var remove_comas = display_student_array_sorting.join("");
         console.log(remove_comas);
         
         document.getElementById("mostrar_nombres_sin_comas").innerHTML = remove_comas;
    }