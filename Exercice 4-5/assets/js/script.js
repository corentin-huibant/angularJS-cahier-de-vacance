var shoppingCart = angular.module("shoppingCart", []);

shoppingCart.controller("CartController", ['$scope', function($scope){

      $scope.items = [
        {title: 'Vodka', quantity: 3, price: 3.95},
        {title: 'Whisky', quantity: 7, price: 12.95},
        {title: 'Mojito', quantity: 5, price: 6.95}
      ];
      
      $scope.remove = function(line) { //sur le bouton comportant la directive ng-click du nom de remove(), on lance une fonction qui a pour paramètre line
          $scope.items.splice(line, 1); //applique la méthode "splice" (suppression d'un élément du tableau) qui prend en paramètre line et le nombre d'élément à supprimer
      };
      $scope.add = function() { //sur le bouton comportant la directive ng-click du nom de radd(), on lance une fonction
          $scope.items.push({title: 'Bière', quantity: 1, price: 6.95}); //applique la méthode "push" (ajout d'un élément du tableau) qui prend en paramètre les éléments à ajouter
      };
      $scope.total = function(){ //sur la valeur total
         var total = 0;
        for(var i = 0; i < $scope.items.length; i++) { //on lance une boucle qui itère la longueure du tableau items
              total += ($scope.items[i].quantity * $scope.items[i].price);  //ensuite, la variable total concatène (+=) la multiplication de la quantité du tableau items via l'indice i et le prix du tableau items via l'indice i
          };
          return total; //on retourne la variable total après notre fonction pour qu'elle soit disponible
      };
}]);
