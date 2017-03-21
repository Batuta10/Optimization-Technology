function vai() {

	if (document.form.nome.value == '') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o Nome";
		document.form.nome.focus();
		return;
	}
	if (document.form.hora.value == '') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o Qt.Hora";
		document.form.hora.focus();
		return;
	}
	if (document.form.dependentes.value == '') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o Dependentes";
		document.form.dependentes.focus();
		return;
	}
	if (document.form.vlhora.value == '') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o Valor Hora";
		document.form.vlhora.focus();
		return;
	}
		var nome = document.form.nome.value;
		var qtdHora = document.form.hora.value;
		var vlHora = document.form.vlhora.value;
		var dependentes = document.form.dependentes.value;

		calculo(nome,vlhora,qtdHora,dependentes);
}

function calculo(n,vlH,qtH,d) {

	salarioBruto = hora * vlHora; dependentes *80;

	document.getElementById("resultado").style.display = "block";
	document.getElementById("resultado").innerHTML = anjo.toFixed(2);	
}
//--------------------------------------------------------------------------------------
function validar() {
	
	if (document.form.dia.value =='') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o dia";
		document.form.dia.focus();
		return;
	}else if (document.form.mes.value =='') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o mes";
		document.form.mes.focus();
		return;
	}else if (document.form.ano.value =='') {
		document.getElementById("resultado").style.display = "block";
		document.getElementById("resultado").innerHTML = "Queria Informar o ano";
		document.form.ano.focus();
		return;
	}
		var dia = document.form.dia.value;
		var mes = document.form.mes.value;
		var ano = document.form.ano.value;

		wesley_safadao(dia,mes,ano);
}
function wesley_safadao(d,m,a){

	safado = somatoria(m) + (a/100) * (50-d);
	anjo = 100 - safado;

	document.getElementById("resultado").style.display = "block";
	document.getElementById("resultado").innerHTML = '<h1>' + anjo.toFixed(2) + "% anjo, mas aquele <br>" + safado.toFixed(2) + "% é vagabundo</h1>";
}
function somatoria(m) {
	soma = 0;

	for (i = 1; soma <= m; i++) {
		soma += 1;
	}
	return soma;
}
function limit(element) {
	var max_caracter = 2;
	if (element.value.length > max_caracter) {
		element.value = element.value.substr(0,max_caracter);
	}
}