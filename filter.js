var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl",function(){
	this.people = [
		{
			name: "John Doe",
			phone: "555-1111"
		},
		{
			name: "Bill Smith",
			phone: "555-2222"
		},
		{
			name: "Mary Jones",
			phone: "555-3333"
		},
		{
			name: "Jane Doe",
			phone: "555-2323"
		},
		{
			name: "Ted Jones",
			phone: "555-4545"
		}
	];
});