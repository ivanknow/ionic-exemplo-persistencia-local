angular.module('minhasContas.services', [])

.factory('ContasService',
		function (CacheFactory) {

	/*var self = this;
	self.contasCache = null;

	activate();

	return {
		update : update,
		getAll : getAll
	};

	function activate() {
		self.contasCache = CacheFactory.get("contasCache");
	}

	function update(items) {
		self.contasCache.put('data', items);
	}

	function getAll() {
		return self.contasCache.get('data');

	}*/
})

.service('BlankService', [ function() {

} ]);


