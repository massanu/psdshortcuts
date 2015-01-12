(function() {
  angular.module('example', ['supersonic']);

}).call(this);

(function() {
  angular.module('example').controller('LearnMoreController', function($scope, supersonic) {
    return $scope.navbarTitle = "Learn More";
  });

}).call(this);

(function() {
  angular.module('example').controller('SettingsController', function($scope, supersonic) {
    return $scope.navbarTitle = "Blend Modes";
  });

}).call(this);

(function() {
  angular.module('example').controller('ToolShortcutsController', function($scope, supersonic) {
    return $scope.navbarTitle = "Shortcuts";
  });

}).call(this);
