var app = angular.module('app',[]);
app.controller("FormController", function(){
	 this.submitForm = function(){
	 	//do something with form data..
	 	console.log("Form Submitted..");
	 };
});