var myApp = angular.module('myApp',[]);
myApp.controller("myCtrl", function() {
	this.tasks = [
      {
      	name: "Go to grocery",
      	done: false
      },
      {
      	name: "Walk the dog",
      	done: false
      },
      {
      	name: "Dinner with boss",
      	done: false
      }
	];
});