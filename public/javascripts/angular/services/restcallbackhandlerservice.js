getHiredModule.service('RestCallbackHandlerService', ['$q', function($q){

// Transform the error response, unwrapping the application dta from
// the API response payload.
this.handleError=function ( response ) {
// The API response from the server should be returned in a
// nomralized format. However, if the request was not handled by the
// server (or what not handles properly - ex. server error), then we
// may have to normalize it on our end, as best we can.
if (
	! angular.isObject( response.data ) ||
	! response.data.message
	) {

	return( $q.reject( "An unknown error occurred." ) );

}

// Otherwise, use expected error message.
return( $q.reject( response.data.message ) );

}


// Transform the successful response, unwrapping the application data
// from the API response payload.
this.handleSuccess=function( response ) {
	return( response.data );
}
}]);