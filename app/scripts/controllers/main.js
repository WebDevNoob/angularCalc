'use strict';

/**
 * @ngdoc function
 * @name jscalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jscalculatorApp
 */
angular.module('jscalculatorApp')
  .controller('MainCtrl',function ($scope) {
    //refactor these out into a multi-d array, that would be cool
    var holder     = [];
    $scope.history = [];
    $scope.screen  = [];
    $scope.display = [];
    $scope.result  =  0;

    $scope.updateScreen = function(num){
      $scope.screen.push(num);
    };

    $scope.addOperator = function(op){
      if (Number.isInteger($scope.screen[$scope.screen.length - 1])){
        holder[holder.length] = $scope.screen.join('');
        holder.push(op);
        $scope.display = holder;
        $scope.screen = [];
      }else{
        $scope.display[$scope.display.length -1] = op;
      }
    }

    $scope.calculate = function(){
      holder[holder.length] = $scope.screen.join('');
      $scope.display = holder;
      holder = [];
      var calculations = "";
      for(var i = 0; i < $scope.display.length; i++){
        calculations = calculations + $scope.display[i];
      }
      $scope.result = eval(calculations);
      $scope.history.push(calculations + "=" + $scope.result);
      $scope.screen[0] = $scope.result;
      $scope.display = $scope.result;
      }

    $scope.clear =  function(){
      $scope.screen = [];
      $scope.display = [];
      holder = [];
      $scope.result = 0;
    };
  });
