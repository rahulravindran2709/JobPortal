'use strict'
getHiredModule.service('SuggestionsService', ['$http', '$q',
    function($http, $q) {
        this.getSuggestions = function(keyword,url) {
            return $http({
                method: "get",
                url: url,
                params: {
                    keyword: keyword
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }

            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });

            return filtered;
        };
    }
])
