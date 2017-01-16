(function () {
    var ns = $.namespace('pskl.controller.dialogs');

    ns.LayerOpacityController = function () {};

    pskl.utils.inherit(ns.LayerOpacityController, ns.AbstractDialogController);

    ns.LayerOpacityController.prototype.init = function (currentOpacity) {
        this.superclass.init.call(this);
    };
})();
