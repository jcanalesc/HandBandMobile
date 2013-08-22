var Responses = {
	genteActual: {
		cortesia: 0, 
		general: 0,
		total: 0
	},
	reportes: {
		dia: [
			[19,3,2013],
			[18,3,2013]
		],
		mes: [
			[5,2013],
			[4,2013],
			[3,2013]
		],
		ano: [2013,2012,2011]
	},
	reporte: {
		datos_grafico: 
		{
			x: [],
			y: [],
		},
		stats: [
			{
				label: "Mejor Dia",
				value: "2000"
			},
			{
				label: "Total",
				value: "10456"
			}
		]
	}
};

for (var i = 0; i < 60; i++)
{
	Responses.reporte.datos_grafico.x.push(i);
	Responses.reporte.datos_grafico.y.push(parseInt(Math.random()*100));
}
