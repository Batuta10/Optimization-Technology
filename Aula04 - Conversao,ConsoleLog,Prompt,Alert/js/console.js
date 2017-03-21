//Etapa 1
var empresa = 'FIAP Tecnologia';
console.log(empresa);
console.log(empresa.length);

console.log(empresa.indexOf('Tecno'));

console.log(empresa.charAt(5));

console.log(empresa.substr(5,6));

console.log(empresa.replace('Tecnologia','Digital'));

entidade = empresa.replace('Tecnologia','Digital');
console.log(entidade);

//Etapa 2
//Conversoes
var  textoInteiro = '20';
console.log('textoInteiro:' + typeof textoInteiro);

var inteiro = parseInt(textoInteiro);
console.log('textoInteiro convertido:' + typeof inteiro);

var textFloat = '10.22';
console.log( 'textFloat:' + typeof textFloat);

var float = parseFloat(textFloat);
console.log( 'textFloat convertido:' + typeof float);

//Int To String
var n1 = 9.90;
//console.log(typeof converte);//Verifica se esta com String
//virgula = converte.replace('.',',');
converte = 'R$ ' + n1.toString().replace('.',',');//Forma em uma linha
console.log(converte);

//String to Int
var n2 = 'R$15,38';
virgula = parseFloat(n2.replace(',','.').replace('R$',''));//Forma em uma linha
console.log(virgula);

//Etapa 3
//Ternario
var n3 = 25;
var retorno = n3 > 2 ? 'Sim':'Não';
alert(retorno);

var idade = prompt('Qual á sua idade ?','');//Prompt Abre um janela padrao do navegador.
if (idade == '') {
	alert('Favor Preencher sua idade!');
}else if (idade >= 18) {
	alert('Acesso aprovador');
}else{
	alert('Acesso reprovado');
}

