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
      if (num === '.'){
        if ($scope.screen.length === 0){
          $scope.screen.push('0.');
        }else{
          $scope.screen.push('.');
        }
      }else{
        $scope.screen.push(num);
      }
    };

    $scope.addOperator = function(op){
      if ($scope.screen.length === 0){
        $scope.screen[0] = $scope.result;
      }
      if (Number.isInteger($scope.screen[$scope.screen.length - 1])){
        holder[holder.length] = $scope.screen.join('');
        holder.push(op);
        $scope.display = holder;
        $scope.screen = [];
      }
        $scope.display[$scope.display.length -1] = op;
    };

    $scope.calculate = function(){
      var calculations = '';

      holder[holder.length] = $scope.screen.join('');
      $scope.display = holder;

      for(var i = 0; i < $scope.display.length; i++){
        calculations = calculations + $scope.display[i];
      }
      $scope.result = eval(calculations);
      $scope.history.push(calculations + '=' + $scope.result);
      $scope.display = $scope.result;
      $scope.screen = [];
      holder = [];
    };

    $scope.clear =  function(){
      $scope.screen  = [];
      $scope.display = [];
      $scope.history = [];
      holder         = [];
      $scope.result  =  0;
    };
  });
