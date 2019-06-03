const fs= require('fs');

let listarTabla = (base, limite = 10) => {
        
        for (let i=1;i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i} `);
        }
}



//modulo.export.crearArchivo
let crearArchivo = (base, limite= 10)=>{
    return new Promise((resolve,reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de base: ${base} no es un numero`)
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido de limite: ${limite} no es un numero`)
            return;
        }
        console.log(limite)
        let data = '';
        for (let i=1;i<=limite; i++){
            data +=`${base} * ${i} = ${base * i} \n`;
        }
    
        fs.writeFile(`./tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}