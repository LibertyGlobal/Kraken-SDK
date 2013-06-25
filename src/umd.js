(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.kraken = root.K = factory();
    }
}(this, function () {

    //= main

    return K;

}));
