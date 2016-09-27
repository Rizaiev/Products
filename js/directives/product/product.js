app.directive('productList', function ($http) {
    return {

        restrict: 'E',

        scope: {

            tovari: '=tovari',
            ngEnter: '='
        },

        templateUrl: "js/directives/product/templateProduct.html",


        link: function (scope, element, attrs, target) {

            scope.targetProduct = function (i) {
                scope.target = scope.tovari[i];
                scope.ngEnter(scope.target);

                var op = angular.element(document.querySelector('.target_tovar')),
                    opi = op.css("display", "inline-block");
              
            };

            
        }
    }
});
