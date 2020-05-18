function obtenerGastadoPorCliente(cliente) {
  let duracionesDeGrabaciones = 0

  for (let j = 0; j < cliente.grabaciones.length; j++) {
    const grabacion = cliente.grabaciones[j]

    duracionesDeGrabaciones += grabacion.duracion
  }

  return duracionesDeGrabaciones * VALOR_POR_HORA
}
//esto para hacerlo mejor, NO HAY QUE REPETIR CODIGO


function obtenerFechaABuscar(mes, anio) {
  if (mes > 9) {
    return mes + '/' + anio
  }

  return '0' + mes + '/' + anio
}

