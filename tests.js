const clientes = [
	{
		/*
		clientes: lista de cliente
	  - nombre
	  - telefono
	  - grabaciones: lista de grabacion
	    - fecha
	    - duracion
	  - pagos: lista de pago
	    - fecha
	    - monto
		*/

		nombre:'Riggida',
		telefono:'3457892',
		grabaciones : [
	 		{
	 			fecha: '03/05/2017',
	 			duracion: 5,

			},
			{
	 			fecha: '11/05/2017',
	 			duracion: 4,

			},
			{
	 			fecha: '05/06/2018',
	 			duracion: 6,

			},
			{
	 			fecha: '12/06/2019',
	 			duracion: 4,

			},
		],
		pagos: [
			{
				fecha:'03/05/2017',
				monto: 500

			},
			{
				fecha:'11/05/2017',
				monto: 500

			},	
			{
				fecha:'05/06/2018',
				monto: 500

			},
			{
				fecha:'12/06/2019',
				monto: 400,

			},			
		],
	},

	{
		nombre: 'SPQR',
		telefono: '456792185',
		grabaciones: [
			{
				fecha:'16/08/2017',
				duracion:6,

			},
			{
				fecha:'15/09/2017',
				duracion:4,

			},
			{
				fecha:'20/09/2018',
				duracion:5,

			},
			{
				fecha:'15/10/2018',
				duracion:3,

			},
			{
				fecha:'15/08/2020',
				duracion:4,

			},
			{
				fecha:'20/04/2020',
				duracion:5,

			},
			
		],

		pagos: [
			{
				fecha:'16/08/2017',
				monto:500,

			},
			{
				fecha:'15/09/2017',
				monto:1000,

			},
			{
				fecha:'20/09/2018',
				monto:200,

			},
			{
				fecha:'15/10/2018',
				monto:300,

			},
			{
				fecha:'15/08/2020',
				monto:200,

			},
			{
				fecha:'20/04/2020',
				monto:100,

			},
		],
	},

	{
		nombre: 'Alicia',
		telefono:'345678921',
		grabaciones: [
			{
				fecha:'20/01/2017',
				duracion:6,
			},
			{
				fecha:'20/01/2018',
				duracion:5,
			},
			{
				fecha:'20/01/2019',
				duracion:3,
			},
		],
		pagos: [
			{
				fecha:'20/01/2017',
				monto:500,
			},
			{
				fecha:'20/01/2018',
				monto:500,
			},
			{
				fecha:'20/01/2019',
				monto:200,
			},
		],	
	},

	{
		nombre: 'AmoX-G',
		telefono: '231354687',
		grabaciones: [
			{
				fecha:'10/04/2017',
				duracion:6,
			},
			{
				fecha:'11/07/2018',
				duracion:4,
			},
			{
				fecha:'11/09/2019',
				duracion:4,
			},
			{
				fecha:'12/12/2019',
				duracion:6,
			},
		],
		pagos: [

			{
				fecha:'10/04/2017',
				monto:500,
			},
			{
				fecha:'11/07/2018',
				monto:500,
			},
			{
				fecha:'11/09/2019',
				monto:500,
			},
			{
				fecha:'12/12/2019',
				monto:500,
			},

		],
	},

	{
		nombre: 'CS',
		telefono: '2324679',
		grabaciones: [
			{
				fecha:'23/05/2017',	
				duracion:4,
			},
			{
				fecha:'23/05/2018',	
				duracion:2,
			},
			{
				fecha:'05/07/2019',	
				duracion:5,
			},
			{
				fecha:'01/03/2020',	
				duracion:4,
			},
		],
		pagos: [
			{
				fecha:'23/05/2017',	
				monto:400,
			},
			{
				fecha:'23/05/2018',	
				monto:200,
			},
			{
				fecha:'05/07/2019',	
				monto:500,
			},
			{
				fecha:'01/03/2020',	
				monto:400,
			},
		],
	},

	{
		nombre: 'El Principio De Todo',
		telefono: '237657897',
		grabaciones: [
			{
				fecha:'25/08/2017',
				duracion:4,
			},
			{
				fecha:'26/09/2017',
				duracion:6,
			},
		],
		pagos: [
			{
				fecha:'25/08/2017',
				monto:400,
			},
			{
				fecha:'26/09/2017',
				monto:500,
			},
		],
	},

	{
		nombre: 'Esto No Es Una Banda',
		telefono: '4568798',
		grabaciones: [
			{
				fecha:'19/07/2017',
				duracion:6,
			},
			{
				fecha:'19/08/2018',
				duracion:4,
			},
			{
				fecha:'19/01/2020',
				duracion:5,
			},
		],
		pagos: [
			{
				fecha:'19/07/2017',
				monto:600,
			},
			{
				fecha:'19/08/2018',
				monto:400,
			},
			{
				fecha:'19/01/2020',
				monto:500,
			},

		],
	},

]

const misDeudores = obtenerDeudores(clientes)

const misMejoresClientes = buscarMejoresClientes(clientes)
let i= 0
while (i<=4){
	//console.log(misMejoresClientes[i]) //Corregir esto, funciona pero es poco estetico
	i++
}

const facturacionTotal = registroContable(clientes,5,2017)
//console.log(facturacionTotal)// funciona


const grabacionesProximas = proximasGrabaciones(clientes,5,2019)
//console.log(grabacionesProximas)