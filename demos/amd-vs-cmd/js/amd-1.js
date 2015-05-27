define(['./mod1', './mod2'],function(mod1, mod2) {

    console.log('require module: main');

    mod1.hello();
    mod2.hello();

    return {
        hello: function() {
            console.log('hello main');
        }
    };
});
