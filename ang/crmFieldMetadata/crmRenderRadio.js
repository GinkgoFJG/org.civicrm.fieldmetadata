(function (angular, $, _) {
  angular.module('crmFieldMetadata').directive('crmRenderRadio', function() {
    return {
      restrict: 'AE',
      scope: {
        field: '=',
        model: '=',
        prefix: '='
      },
      templateUrl: '~/crmFieldMetadata/crmRenderRadio.html',
      controller: ['$scope', function crmRenderRadioController($scope) {
        $scope.clear = function clear() {
          $scope.model = null;
        };
      }]
    };
  });
})(angular, CRM.$, CRM._);