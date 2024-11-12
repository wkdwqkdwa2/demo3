sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/LayoutType"
], function (Controller, JSONModel, LayoutType) {
    "use strict";

    return Controller.extend("demo3.controller.Detail", {
        onInit: function () {
            // A안 데이터 세팅
            // 해당 페이지에서 사용하고자 하는 데이터 선언하는 방법 현 템플릿은 model을 통해서 선언을 했기 때문에 사용을 안해줘도 데이터를
            // 사용할 수 있습니다.
            // var oModel = new JSONModel({
            //     Products: [
            //         {ProductId: "1", Name: "Product 1", Description: "Description 1", Price: "100"},
            //         {ProductId: "2", Name: "Product 2", Description: "Description 2", Price: "200"}
            //     ]
            // });
            
            // 모델을 뷰에 설정
            // this.getView().setModel(oModel);

            // 라우터 가져오기
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
        },


        _onProductMatched: function (oEvent) {
            // URL 파라미터에서 제품 ID 가져오기
            var sProductId = oEvent.getParameter("arguments").productPath;
            console.log("Product ID in Detail:", sProductId);

            // 모델 가져오기
            var oModel = this.getView().getModel();
            var sPath = "products>/products/" + (sProductId - 1); // 인덱스에 맞게 조정 js같은 경우는 0부터 시작이기 때문에 -1를 해줍니다.
            console.log("디테일접근", sPath);
            // A~B안 데이터 연결
            // this.getView().byId("txt1").bindElement(sPath)
            // this.getView().byId("txt2").bindElement(sPath)
            // this.getView().byId("txt3").bindElement(sPath)


            // C안 데이터 세팅
            this.getView().byId("n1").bindElement(sPath + "/Name");
            this.getView().byId("n2").bindElement(sPath + "/Result");
            this.getView().byId("n3").bindElement(sPath + "/Result2");


            // 해당 로직은 공통으로 데이터를 잘 가져왔는지 확인하기 위함입니다.
            if (!oData) {
                console.error("No product data found for the path:", sPath);
                return; // 데이터가 없으면 더 이상 진행하지 않음
            }
            console.log("Product Data:", oData);

            // 뷰에 데이터 바인딩
            this.getView().bindElement({
                path: sPath,
                model: ""  // 기본 모델 사용
            });
        },
        // 이전 버튼으로 메인 화면으로 돌아가는 함수입니다. 
        onNavBack: function () {
            // 해당 경로를 통해 원래 메인 페이지로 돌아갑니다.
            var oRouter = this.getOwnerComponent().getRouter();
            var oFCL = this.getOwnerComponent().getRootControl().byId("flexibleColumnLayout");
            
            oFCL.setLayout(LayoutType.OneColumn);
            oRouter.navTo("master");
        }
    });
});