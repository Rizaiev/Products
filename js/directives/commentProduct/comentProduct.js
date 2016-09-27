app.directive('comments', function (ProductService) {
    return {

        restrict: 'E',

        scope: {

            comment: '=comment',
            product: '=product',
            postCommet: '=',
            token: '=token',
            rate: '=rate'

        },

        templateUrl: "js/directives/commentProduct/templateComentProduct.html",

        link: function (scope) {

            scope.targetProduct = function (i) {
                scope.qq = scope.tovari[i];
                scope.ngEnter(scope.qq);
                angular.element(document.querySelector('.target_tovar')).css("display", "inline-block");
            };

            scope.saveComment = function () {

                if (!scope.text) return;

                ProductService.postComment(scope.product, scope.text, scope.token, scope.rate, function (cb) {
                    angular.element(document.querySelector('.noautoriz')).css("display", "inline-block");
                });
                scope.postCommet(scope.product);
                scope.text = '';
                if (scope.targetRate) {
                    scope.targetRate.style.backgroundPosition = "left 0px";
                }

            };


            $('.starRate ').on('click', function (event) {
                if (scope.targetRate) {
                    scope.targetRate.style.backgroundPosition = "left 0px";
                }
                scope.rate = event.target.attributes[1].value;
                scope.targetRate = event.toElement;
                scope.targetRate.style.backgroundPosition = "left -16px";

            });

        }
    }
});