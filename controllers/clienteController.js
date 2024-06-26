/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllCliente
 * .getClienteBydni
 * .createCliente
 * .updateCliente
 * .deleteCliente
 */

//1- Importamos el módulo db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db.js");

//2- getAllClientes
const getAllClientes = (req,res)=>{
    // creamos la consulta para traer todas los clientes           
    const sql ='SELECT clientes.Idcliente,clientes.dni,clientes.nombre,clientes.email,clientes.direccion,clientes.telefono,clientes.observaciones,provincia.provincia, rutas.nombreruta,rutas.tiporuta FROM clientes LEFT JOIN provincia ON clientes.Idcliente = provincia.Idcliente LEFT JOIN rutas ON clientes.Idcliente = rutas.Idcliente';
    //Enviamos la consulta a la bbdd
    
    db.query(sql, (error, result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};
//3- getClienteBydni
const getClienteBydni = (req,res)=>{
    // obtenemos el dni solicitado
    // Tomamos la solicitud y extraemos su dni
    // Esta es una notacion de desestructuración {dni}
    const {dni} = req.params; // const dni = req.params.dni // 

    // consulta a la bbdd ? es un marcador de posicion
    const sql = 'SELECT clientes.Idcliente,clientes.dni,clientes.nombre,clientes.email,clientes.direccion,clientes.telefono,clientes.observaciones,provincia.provincia, rutas.nombreruta,rutas.tiporuta FROM clientes LEFT JOIN provincia ON clientes.Idcliente = provincia.Idcliente LEFT JOIN rutas ON clientes.Idcliente = rutas.Idcliente WHERE dni = ?'
    // Enviamos la consulta
    db.query(sql, [dni],(error,result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};

// createCliente
const createCliente = (req,res)=>{
    // Desestructuramos la request
    const {dni,nombre,email,direccion,telefono,observaciones} = req.body;
    
    // creamos la consulta
    const sql = 'INSERT INTO clientes (dni, nombre, email, direccion, telefono, observaciones) VALUES (?, ?, ?, ?, ?, ?) ';
       
    // pasamos la consulta
    db.query(sql,[dni,nombre,email,direccion,telefono,observaciones], (error,result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Cliente creado"});       
    })
};


// updateCliente

const updateCliente = (req,res)=>{
    // Destructuramos la peticion
    const {dni} = req.params;
    const {nombre,email,direccion,telefono,observaciones} = req.body;
    
    // Consulta con marcadores
    const sql = 'UPDATE clientes SET nombre = ?, email = ?, direccion = ?, telefono =?, observaciones = ?  WHERE dni = ?';

    // Pasamos la consulta
    db.query(sql, [nombre,email,direccion,telefono,observaciones, dni], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Cliente actualizado"});
   })
}

// deleteCliente
const deleteCliente = (req,res)=>{
    // desestructuracion
    const {dni} = req.params;
    // consulta sql
    const sql = 'DELETE FROM clientes WHERE dni = ?';

    // Pasamos la consulata a db
    db.query(sql,[dni], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Cliente borrado"});
    })
}


// Exportamos el modulo
module.exports = {
    getAllClientes,
    getClienteBydni,
    createCliente,
    updateCliente,
   deleteCliente
};