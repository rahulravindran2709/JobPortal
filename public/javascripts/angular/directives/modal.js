getHiredModule.directive('modal', function(){
	// Runs during compile
	return {
		// priority: 1,
		// terminal: true,
		   scope: {hidden:'='}, // {} = isolate, true = child, false/undefined = no change
		controller: 'LoginController',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		   restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'partials/loginmodal.html',
			replace: true,
		   transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
			function toggleModalState()
			{
				console.log('Toggled'+$scope.hidden);
			if($scope.hidden)
			{
				iElm.modal('hide');
			}
			else
			{
				iElm.modal('show');
			}
			}
			$scope.$watch('hidden',toggleModalState);	
		}
	};
});