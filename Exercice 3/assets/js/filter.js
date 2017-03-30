var app = angular.module('groups', []);

app.controller('UsersController', ['$scope', 'UsersFactory',function($scope, UsersFactory){
    $scope.users = UsersFactory;
  }
]);

app.factory('UsersFactory', function() {

  var users = {};

  users = [ 
      { 
        "name": "Staci", 
        "street": "Montague Terrace", 
        "city": "Navarre", 
        "state": "Indiana" 
      }, 
      { 
        "name": "Jewell", 
        "street": "Douglass Street", 
        "city": "Grandview", 
        "state": "New Hampshire" 
      }, 
      { 
        "name": "Millicent", 
        "street": "Dekalb Avenue", 
        "city": "Emerald", 
        "state": "Hawaii" 
      }, 
      { 
        "name": "Buckner", 
        "street": "Freeman Street", 
        "city": "Lithium", 
        "state": "Wisconsin" 
      }, 
      { 
        "name": "Lane", 
        "street": "Newport Street", 
        "city": "Dundee", 
        "state": "Utah" 
      } 
];
  return users;

});
