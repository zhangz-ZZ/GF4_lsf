(function () {

    angular.module('GF4StatusAPP')
        .config(ConfigFn);

    ConfigFn.$inject = ['$httpProvider'];

    function ConfigFn($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

})();