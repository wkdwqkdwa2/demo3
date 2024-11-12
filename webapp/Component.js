sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/f/FlexibleColumnLayoutSemanticHelper",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, Device, FlexibleColumnLayoutSemanticHelper, JSONModel) {
    "use strict";

    return UIComponent.extend("demo3.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
    // call the base component's init function
    UIComponent.prototype.init.apply(this, arguments);

    // 레이아웃 모델 초기화
    var oModel = new JSONModel();
    this.setModel(oModel, "layout");
    
    // enable routing
    this.getRouter().initialize();
        },

        getHelper: function () {
            var oFCL = this.getRootControl().byId("flexibleColumnLayout");
            var oParams = jQuery.sap.getUriParameters();
            var oSettings = {
                defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
                defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
                mode: oParams.get("mode"),
                maxColumnsCount: oParams.get("max")
            };
            return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
        }
    });
});