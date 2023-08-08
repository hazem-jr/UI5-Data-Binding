sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("AggregationBinding.controller.main", {
		onInit: function() {

			var oTable = this.getView().byId("i_table");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data.json");
			oTable.setModel(oModel);
		}
	});
});