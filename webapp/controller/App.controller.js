sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("demo3.controller.App", {
      onInit: function () {
          // var oModel = new JSONModel();

          var oModel = new JSONModel({
            Products: [
                {ProductId: "1", Name: "Product 1", Description: "Description 1", Price: "100"},
                {ProductId: "2", Name: "Product 2", Description: "Description 2", Price: "200"}
            ]
        });
        
        // 모델을 뷰에 설정
        this.getView().setModel(oModel);
          oModel.setData({
              layout: "OneColumn"
          });
          this.getView().setModel(oModel);
      }
  });
});