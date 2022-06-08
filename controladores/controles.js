const fs = require('fs');

exports.calcularConversion = (req,res) => {
    
    const formData = req.body;
    const file = fs.readFileSync('./datos/CPI.json' , 'UTF-8');

    let json = JSON.parse (file);


    if (formData.anio1 >= 1913 && formData.anio2 <= 2022 && formData.anio1 <= formData.anio2){
      
        let costoAntes = json.filter (v => v.year == formData.anio1 && v.month == formData.mes1 ) 
                      .map (v => v.value);

        let costoAhora = json.filter (v => v.year == formData.anio2 && v.month == formData.mes2 ) 
                                 .map (v => v.value);      

        let precioFinal = ((formData.precioProducto / costoAntes) * costoAhora).toFixed(1);
             
       // res.send ({precio : precioFinal});
        res.json ({
            precio : precioFinal
        });

    }else{
        res.send ("Datos Incorrectos");
    }
        res.redirect('back')
}
