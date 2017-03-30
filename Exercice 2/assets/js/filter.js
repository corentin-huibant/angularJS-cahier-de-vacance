var app = angular.module('groups', []);

app.controller('UsersController', ['$scope', 'UsersFactory',function($scope, UsersFactory){
    $scope.users = UsersFactory;
  }
]);

app.factory('UsersFactory', function() {

  var users = {};

  users = [
  {
    "surname": "Petersen",
    "email": "rosannepetersen@inventure.com"
  },
  {
    "surname": "Combs",
    "email": "rosannecombs@inventure.com"
  },
  {
    "surname": "Fitzpatrick",
    "email": "rosannefitzpatrick@inventure.com"
  },
  {
    "surname": "Sears",
    "email": "rosannesears@inventure.com"
  },
  {
    "surname": "Velasquez",
    "email": "rosannevelasquez@inventure.com"
  },
  {
    "surname": "Kramer",
    "email": "rosannekramer@inventure.com"
  },
  {
    "surname": "Valentine",
    "email": "rosannevalentine@inventure.com"
  },
  {
    "surname": "Medina",
    "email": "rosannemedina@inventure.com"
  },
  {
    "surname": "Kaufman",
    "email": "rosannekaufman@inventure.com"
  },
  {
    "surname": "Humphrey",
    "email": "rosannehumphrey@inventure.com"
  },
  {
    "surname": "Curtis",
    "email": "rosannecurtis@inventure.com"
  }
];
  return users;

});
