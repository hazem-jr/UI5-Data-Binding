sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller , JSONModel) {
	"use strict";

	return Controller.extend("CallRestService.controller.mainView", {
		onCall: function() {

			var URL = "/V3/northwind/northwind.svc/Orders/?$format=json";
			$.ajax({
				type: "GET",
				url: URL,
				contentType: "application/json",
				dataType: "json",
				success: this.Success.bind(this),
				error: [this.Failed, this]

			});
		},

		Success: function(data) {
			
			//get response data 
			var results = data.value ;
            //define a new model 
            var dataModel = new JSONModel() ;
            //set to model
            dataModel.setData({
            	"results" : results // dataSet
            });
            
            //set to list
            var dataList = this.getView().byId("DataList") ;
            dataList.setModel(dataModel) ;
            dataList.bindItems({
            	path:"/results", // add your dataSet
            	template: new sap.m.DisplayListItem({
            		label:"{OrderID}",
            		value:"{CustomerID}"
            	})
            	
            });
			
		},

		Failed: function(error) {
			debugger;

		}
	});
});