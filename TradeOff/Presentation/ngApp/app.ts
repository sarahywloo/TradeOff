namespace TradeOff {
    
    angular.module('TradeOff', ['ngRoute']);

    angular.module('TradeOff').factory('authInterceptor',
        ($q: ng.IQService, $window: ng.IWindowService, $location: ng.ILocationService) => {
            return {
                request: (config) => {
                    config.headers = config.headers || {};
                    let token = $window.localStorage.getItem('token');
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
                },
                responseError: (response) => {
                    if (response.status === 401) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        });

    angular.module('TradeOff')
        .config(function ($routeProvider: ng.route.IRouteProvider, $httpProvider: ng.IHttpProvider) {

            $httpProvider.interceptors.push('authInterceptor');

            $routeProvider
                .when('/', {
                    templateUrl: '/Presentation/ngApp/views/home.html',
                    controller: TradeOff.Controllers.HomeController,
                    controllerAs: 'controller'
                });

            $routeProvider
                .when('/login', {
                    templateUrl: '/Presentation/ngApp/views/login.html',
                    controller: TradeOff.Controllers.AuthController,
                    controllerAs: 'controller'
                });
            
            $routeProvider
                .when('/register', {
                    templateUrl: '/Presentation/ngApp/views/register.html',
                    controller: TradeOff.Controllers.AuthController,
                    controllerAs: 'controller'
                });
        });
}