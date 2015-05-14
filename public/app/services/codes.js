(function(){
	app.factory('codes', function($http, API_CONFIG, auth, loading){
		var URL = API_CONFIG.API_URL

		function getURL(filters){
			var url = URL + "/codes/" + auth.getToken() + "/" + filters.dataCenter;

			if( filters.prefix ){
				url = url + "/" + encodeURIComponent(filters.prefix);
			}

			if( filters.filterBy && filters.filter ){
				url = url + "/" + filters.filterBy + "/" + filters.filter;
			}

			return url;
		}

		function postURL(code, filters){
			var url = URL + "/codes/" + auth.getToken() + "/" +  encodeURIComponent(code.key);
			return url;
		}

		function sanitize( code ){
			var key, restriction, value, description, availableToJS;
			
			key = code.key;

			restriction = code.restriction || 'boolean';

			value = code.value || "false";

			description = code.description;

			if(code.availableToJS){
				availableToJS = 'true';
			}else{
				availableToJS = 'false';
			}

			var newCode = {
				key :  key,
				restriction : restriction,
				value : value,
				description : description,
				availableToJS : availableToJS
			};
			console.log(newCode);

			return newCode;
		}

		var codes = {
			
			save : function(code, filters, _callback){
				code = sanitize(code);
				
				var url = postURL(code, filters);
				loading.start();
				$http.post(url, code)
				.success(function(data){
					_callback(true);
				})
				.error(function(data, status){
					callback(false, status);
				})
				.finally(function(){
					loading.stop();
				});
			},

			load : function(filters, _callback){
				var url = getURL(filters);
				loading.start();
				$http.get( url )
				.success(function(data){
					_callback(true, data);
				})
				.error(function(data, status){
					_callback(false, status);
				})
				.finally(function(){
					loading.stop();
				});
			},

			remove : function( code, filters, _callback){
				var url = postURL(code)
				loading.start();
				$http.delete( url )
				.success(function(data){
					_callback(true, data);
				})
				.error(function(data, status){
					_callback(false, status);
				})
				.finally(function(){
					loading.stop();
				});
			}
		};

		
		return codes;
	});
}());