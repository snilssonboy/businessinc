var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/overview');

    $stateProvider

        // OVERVIEW STATE
        .state('overview', {
            url: '/overview',
            templateUrl: 'partials/overview.html'
        })

        // COMPANIES STATE
        .state('companies', {
            url: '/companies',
            templateUrl: 'partials/companies.html'
        })

        // COMPANIES STATE
        .state('managers', {
            url: '/managers',
            templateUrl: 'partials/managers.html'
        })

        // EMPLOYEES STATE
        .state('employees', {
            url: '/employees',
            templateUrl: 'partials/employees.html'
        });

});
