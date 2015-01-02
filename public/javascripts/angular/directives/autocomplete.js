getHiredModule.directive('autoComplete', ['SuggestionsService',
    function(SuggestionsService) {
        console.log('Compiled');
        return {
            // terminal: true,
            scope: {
                id: '@id',
                suggestionTriggerLimit: '=',
                searchPropertyName: '@',
                placeholder: '@',
                styleClass: '@',
                elementName: '@',
                url:'@'
            }, // {} = isolate, true = child, false/undefined = no change
            restrict: 'EAC', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'partials/autocomplete.html',
            replace: true,
            transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                $scope.searchString = null;
                $scope.suggestions = [];
                var hideResults = function() {
                    $scope.suggestions = [];
                    iElm.find(".autocompleteResultContainer").hide();
                };
                var showResults = function(keyword) {
                	console.log('Show result'+keyword);
                    $scope.$broadcast('searchStringChanged', keyword);
                    iElm.find(".autocompleteResultContainer").show();
                }
                $scope.selectOption = function(result) {
                    $scope.searchString = result;
                    hideResults();
                };
                $scope.triggerAutoComplete = function(keyword) {
                    if (keyword && keyword.length >= $scope.suggestionTriggerLimit) {
                        SuggestionsService.getSuggestions(keyword,$scope.url).then(function(res) {
                            $scope.suggestions = res;
                           
                        }, function() {
                            console.log('Error in retrieving suggestions');
                        }).then(function(){ showResults(keyword);});

                    } else {
                        $scope.suggestions = [];
                    }
                };
                //$scope.$watch('searchString',triggerAutoComplete);
            }
        };
    }
]).directive('highlight', function() {
    // Runs during compile
    return {
        // name: '',
        priority: 1,
        // terminal: true,
        // scope: {term :'@term'}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

            var applyHighlight = function(event, keyword) {
            	console.log('Apply highlight');
                function htmlToPlaintext(text) {
                    return String(text).replace(/<[^>]+>/gm, '');
                }
                var strippedText = htmlToPlaintext(iElm.html());
                iElm.html(strippedText.replace(keyword, '<b>$&</b>'));
            };

            $scope.$on('searchStringChanged', applyHighlight);


        }
    };
});
