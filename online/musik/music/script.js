// Code goes here

var app = angular.module('app', []);            
app.controller('FirstCtrl', ['$scope','$http', '$filter', function($scope, $http, $filter){
    
$scope.tableDatas = [
    {name: 'value1', fileName:'file1', filePath: 'https://avatars.githubusercontent.com/u/16254602?v=4', selected: true},
    {name: 'value2', fileName:'file2', filePath: 'data/file2.txt', selected: true},
    {name: 'value3', fileName:'file3', filePath: 'data/file3.txt', selected: false},
    {name: 'value4', fileName:'file4', filePath: 'data/file4.txt', selected: true},
    {name: 'value5', fileName:'file5', filePath: 'data/file5.txt', selected: true},
    {name: 'value6', fileName:'file6', filePath: 'data/file6.txt', selected: false},
  ];  
$scope.application = [];   

$scope.selected = function() {
    $scope.application = $filter('filter')($scope.tableDatas, {
      checked: true
    });
}

$scope.downloadAll = function(){
    $scope.selectedone = [];     
    angular.forEach($scope.application,function(val){
       $scope.selectedone.push(val.name);
       $scope.id = val.name;        
       angular.element('#'+val.name).closest('tr').find('.downloadable')[0].click();
    });
}         
 
    
}]);