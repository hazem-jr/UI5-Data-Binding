sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ElementBindingInUI5.controller.MainView", {

		onInit: function() {
			var layout = this.getView().byId("i_vlayout") ;  
			var oModel = new sap.ui.model.json.JSONModel() ;
			oModel.loadData("model/data.json") ;
			layout.setModel(oModel);
		}
	});
});