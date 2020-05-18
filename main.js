


const VALOR_POR_HORA = 100

function obtenerDeudores(clientes) {
  /*
  recibe una lista de clientes y devuelve una lista de deudores (nombre, telefono y monto a pagar)

  por cada cliente fijarse si debe algo:
    un cliente deba algo cuando lo que pagó es menor a lo que gastó

    lo que gastó: la suma de las duraciones de sus grabaciones * 100
    lo que pagó: la suma de los montos de sus pagos
  */

  const deudores = []

  

  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]

    const gastadoDeCliente = obtenerGastadoPorCliente(cliente)

    let pagadoDeCliente = 0

    for (j = 0; j < cliente.pagos.length; j++) {
      const pago = cliente.pagos[j]

      pagadoDeCliente += pago.monto
    }

    const deudaDeCliente = gastadoDeCliente - pagadoDeCliente

    if (deudaDeCliente > 0) {
      deudores.push({
        nombre: cliente.nombre,
        telefono: cliente.telefono,
        monto: deudaDeCliente,
      })
    }
  }

  return deudores
}


function buscarMejoresClientes(clientes) {
	const mejoresClientes=[]

	for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]

    

    
        mejoresClientes.push({
 		nombre: cliente.nombre,
 		monto: obtenerGastadoPorCliente(cliente),
      
    })

 }

 mejoresClientes.sort(function(a,b) {
	return(b.monto - a.monto)
})

return mejoresClientes


}


//Ahora haremos la funcion buscarFecha: 
/*
-recibe como parametro una fecha(mes y año) y devuelve la suma de todo lo que se facturo
-devuelvue un acumulador que tendria todo lo que se facturo en ese mes y año
-recorremos el array clientes

*/



function registroContable(clientes,mes,anio){
	let facturacion = 0
	for(let i=0;i<clientes.length;i++){
		const cliente = clientes[i]

		for(let j=0; j<cliente.pagos.length; j++){
			const fechas = cliente.pagos[j].fecha
			
			const busco = obtenerFechaABuscar(mes,anio)

			if(fechas.includes(busco)){
				facturacion = facturacion + cliente.pagos[j].monto
			}
		}
	}

	return facturacion
}

function proximasGrabaciones (clientes,mes,anio) {
	let grabaciones=0
	let promedio = 0
	for(let i=0; i<clientes.length;i++){
		const cliente = clientes[i]



		for(let j=0; j<cliente.grabaciones.length;j++) {
			const fechas = cliente.grabaciones[j].fecha

			const busco = obtenerFechaABuscar(mes,anio)

			if(fechas.includes(busco)){
				grabaciones = grabaciones + cliente.grabaciones.length
				
			}
		}
	}
	grabaciones = Math.trunc(grabaciones/4)
	promedio = grabaciones / 4
	return Math.trunc(promedio)
}




