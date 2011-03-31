var $$ = (function($) {
    var store = {};

    for (var method in $.fn) {
        if (typeof $.fn[method] == 'function') {
            (function(method){
                store[method] = function() {
                    this.calls.push({
                        method: method,
                        args: Array.prototype.slice.call(arguments).slice()
                    });
                    return this;
                };
            })(method);
        }
    }
            
    return function(selector) {
        var chain = function() {
            var calls = chain.calls,
                $scope = $(selector || this, this);
                
            for (var i = 0, length = calls.length; i < length; i++) {
                var call = calls[i];
                var fn = $scope[call.method];
                $scope = fn.apply($scope, call.args);
            }
            
            return $scope;
        };
        
        chain.calls = [];
        
        for (method in store) {
            chain[method] = store[method];
        }
                        
        return chain;
    }
})(jQuery);
