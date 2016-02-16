angular.module('minhasContas.controllers', [])
  
.controller('minhasContasCtrl', function($scope) {
var vm = this;
vm.total = 0;
vm.itemAtual = {};
vm.listaValores = [];
vm.addValor = function(){
	
	if(!vm.itemAtual.valor.match(/^-?\d*(\,\d+)?$/)){
		vm.itemAtual.valor="0,00";
		return;
	}
	if(!vm.itemAtual.valor === "0,00"){
		return;
	}
	if(!vm.itemAtual.titulo === ""){
		return;
	}
	
	vm.listaValores.push(vm.itemAtual);
	vm.itemAtual = {};	
	vm.getSaldo();
	
};

vm.removeValor = function(index){
	
	if (index > -1) {
		vm.listaValores.splice(index, 1);
	}
	vm.getSaldo();
	
};

vm.getSaldo = function(){
		if (vm.listaValores.length == 0){
			vm.total = 0;
			
		}
		vm.total = 0;
		for(var i=0;i<vm.listaValores.length;i++){
			vm.total+= parseFloat(vm.listaValores[i].valor.replace(",","."));
			
		}
		

	
};

vm.getSaldo();
})
 