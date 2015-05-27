define(function(require, exports, module) {
    console.log('require module: main');

    require(['./mod1'],function(mod1){
        mod1.hello();
    });
    require(['./mod2'],function(mod2){
        mod2.hello();
    });

    return {
        hello: function() {
            console.log('hello main');
        }
    };
});
