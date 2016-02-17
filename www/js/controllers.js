angular.module('minhasContas.controllers', [])

.controller(
		'minhasContasCtrl',
		function($scope) {
			var vm = this;
			vm.total = 0;
			vm.itemAtual = {};
			if (localStorage.getItem('items')) {
				vm.listaValores = JSON.parse(localStorage.items);
				;
			} else {
				vm.listaValores = [];
			}

			vm.addValor = function() {

				vm.listaValores.push(vm.itemAtual);
				vm.itemAtual = {};
				vm.getSaldo();
				localStorage.setItem('items', JSON.stringify(vm.listaValores));

			};

			vm.removeValor = function(index) {

				if (index > -1) {
					vm.listaValores.splice(index, 1);
				}
				vm.getSaldo();

			};
			
			vm.removeAll = function() {

				
					vm.listaValores=[];
					localStorage.setItem('items','');
					vm.getSaldo();

			};

			vm.getSaldo = function() {
				if (vm.listaValores.length == 0) {
					vm.total = 0;

				}
				vm.total = 0;
				for (var i = 0; i < vm.listaValores.length; i++) {
					vm.total += parseFloat(vm.listaValores[i].valor);

				}

			};

			vm.getSaldo();
		})