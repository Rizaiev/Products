app.directive('targetProduct', function ($http) {
    return {

        restrict: 'E',

        scope: {

           
            value: '=value'
        },

        templateUrl: "js/directives/targetProduct/templateTargetProduct.html",


        link: function (scope, element, attrs) {


            

        }
    }
});