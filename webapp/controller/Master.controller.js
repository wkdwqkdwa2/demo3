sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

return Controller.extend("demo3.controller.Master", {
    onInit: function () {
        // A안 데이터 세팅
        // var oModel = new JSONModel({
        //     Products: [
        //         {ProductId: "1", Name: "Product 1", Description: "Description 1", Price: "100"},
        //         {ProductId: "2", Name: "Product 2", Description: "Description 2", Price: "200"}
        //     ]
        // }); 
        // // 모델을 뷰에 설정
        // this.getView().setModel(oModel);
        
        // 라우터 가져오기
        this.oRouter = this.getOwnerComponent().getRouter();
    },
    // onListItemPress: function (oEvent) {
    //     try {
    //         // 리스트 항목 가져오기
    //         var oItem = oEvent.getParameter("listItem");
    //         console.log(oItem);
    //         var oBindingContext = oItem.getBindingContext();               
            
    //         // 바인딩 컨텍스트 확인
    //         if (!oBindingContext) {
    //             console.error("No binding context available");
    //             return;
    //         }
    //         var sPath = oBindingContext.getPath();
    //         var oModel = this.getView().getModel();
    //         var oProduct = oModel.getProperty(sPath);
    
    //         console.log("Selected Product:", oProduct);
    //         console.log("Path:", sPath);
    
    //         // FCL 레이아웃 변경
    //         var oFCL = this.getOwnerComponent().getRootControl().byId("flexibleColumnLayout");
    //         if (oFCL) {
    //             oFCL.setLayout(sap.f.LayoutType.TwoColumnsMidExpanded);
    //         }
    
    //         // 네비게이션
    //         this.oRouter.navTo("detail", {
    //             productPath: oProduct.ProductId
    //         });
    
    //     } catch (error) {
    //         console.error("Error in onListItemPress:", error);
    //     }
    // },
    onListItemPress: function (oEvent) {
        console.log(1);
        try {
            // 리스트 항목 가져오기
            var oItem = oEvent.getParameter("listItem");
            // var oBindingContext = oItem.getBindingContext();

            // mProperties를 통해 선택된 제품 정보 가져오기
            var oProduct = {
                ProductId: oItem.getProperty("description"), // 제품 ID는 description 속성으로 가정
                Name: oItem.getProperty("title"), // 제목
            };
    
            console.log("Selected Product:", oProduct);
    
            // 레이아웃 변경
            var oFCL = this.getOwnerComponent().getRootControl().byId("flexibleColumnLayout");
            if (oFCL) {
                oFCL.setLayout(sap.f.LayoutType.TwoColumnsMidExpanded);
            }
    
            // 네비게이션 Detail에서 Master에서 선택한 행에 대한 정보를 가져오기 위한 키 값인 ProductId를 전달하는 것을 볼 수 있습니다.
            // Detail.js에서 해당 controller의 이름이 detail를 부르는 것을 알 수 있습니다. 
            this.oRouter.navTo("detail", {
                productPath: oProduct.ProductId
            });
    
        } catch (error) {
            console.error("Error in onListItemPress:", error);
        }
    }
});

});