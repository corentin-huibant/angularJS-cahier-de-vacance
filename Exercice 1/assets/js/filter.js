var app = angular.module('geo', []);

app.controller('RegionController', ['$scope', 'RegionFactory',function($scope, RegionFactory){
    $scope.regions = RegionFactory;
  }
]);

app.factory('RegionFactory', function() {

  var region = {};

  region = [
    {
        "Nom": "alsace",
        "departement": [67, 68]
    },
    {
        "Nom": "aquitaine",
        "departement": [40, 47, 33, 24, 64]
    },
    {
        "Nom": "auvergne",
        "departement": [43, 3, 15, 63]
    },
    {
        "Nom": "basse-normandie",
        "departement": [14, 61, 50]
    },
    {
        "Nom": "bourgogne",
        "departement": [21, 58, 71, 89]
    },
    {
        "Nom": "bretagne",
        "departement": [29, 35, 22, 56]
    },
    {
        "Nom": "centre",
        "departement": [45, 37, 41, 28, 36, 18]
    },
    {
        "Nom": "champagne-ardenne",
        "departement": [10, 8, 52, 51]
    },
    {
        "Nom": "corse",
        "departement": ["2b", "2a"]
    },
    {
        "Nom": "franche-compte",
        "departement": [39, 25, 70, 90]
    },
    {
        "Nom": "haute-normandie",
        "departement": [27, 76]
    },
    {
        "Nom": "languedoc-roussillon",
        "departement": [48, 30, 34, 11, 66]
    },
    {
        "Nom": "limousin",
        "departement": [19, 23, 87]
    },
    {
        "Nom": "lorraine",
        "departement": [55, 54, 57, 88]
    },
    {
        "Nom": "midi-pyrennees",
        "departement": [46, 32, 31, 12, 9, 65, 81, 82]
    },
    {
        "Nom": "nord-pas-de-calais",
        "departement": [62, 59]
    },
    {
        "Nom": "pays-de-la-loire",
        "departement": [49, 44, 72, 53, 85]
    },
    {
        "Nom": "picardie",
        "departement": [2, 60, 80]
    },
    {
        "Nom": "poitou-charentes",
        "departement": [17, 16, 86, 79]
    },
    {
        "Nom": "provences-alpes-cote-dazur",
        "departement": [4, 5, 6, 13, 84, 83]
    },
    {
        "Nom": "rhones-alpes",
        "departement": [38, 42, 26, 7, 1, 74, 73, 69]
    },
    {
        "Nom": "ile-de-france",
        "departement": [77, 75, 78, 93, 92, 91, 95, 94]
    }
];
  return region;

});
