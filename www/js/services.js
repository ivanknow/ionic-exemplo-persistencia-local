angular.module('minhasContas.services', [])

.factory('ContasService', ['CacheFactory',ContasService])

.service('BlankService', [function(){

}]);

function ContasService(CacheFactory) {

    var self = this;
    self.contasCache = null;

    activate();

    return {
        add: add,
        remove: remove,
        getAll: getAll
    };

    function activate() {
        self.contasCache = CacheFactory.get("contasCache");
    }

    function add(item) {
        self.contasCache.put(item.id, item);
    }

    function remove(itemId) {
        self.myTeamsCache.remove(itemId.toString());
    }

    function getFollowedTeams() {
        var items = [];
        var keys = self.contasCache.keys();

        for(var i = 0; i < keys.length; i++) {
            var item = self.contasCache.get(keys[i]);
            items.push(item);
        }

        return items;
    }
}

