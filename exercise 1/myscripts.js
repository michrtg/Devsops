function plotDonut (indo, france, canada, usa, argen){

	var xArray = ["Indonesia","France","Canada","USA","Argentina"];
	var yArray = [indo, france, canada, usa, argen];
	
	var layout= {title: "world wide wine production"};
	
	var data= [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

	Plotly.newPlot("myPlot", data, layout);
}

plotDonut(55, 49, 44, 24, 15);

document.getElementById("id-indo").value = "55";
document.getElementById("id-fran").value = "48";
document.getElementById("id-cana").value = "44";
document.getElementById("id-usa").value = "24";
document.getElementById("id-arge").value = "80";

document.getElementById(btn-update).onclick = function(){

	var val_indo = document.getElementById("id-indo").value;
	var val_fran = document.getElementById("id-fran").value;
	var val_cana = document.getElementById("id-cana").value;
	var val_usa = document.getElementById("id-usa").value;
	var val_arge = document.getElementById("id-arge").value;
	
	plotDonut(val_indo, val_fran, val_cana, val_usa, val_arge);
};

