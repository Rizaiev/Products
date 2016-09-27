var app = angular.module('Twitter', []);

app.controller("Ctrl", function ($scope, $http, ProductService) {
    
    $scope.comment = [];
    $scope.res = [];
    $scope.token = "";
    $scope.userName = "Гость";
    $scope.rate = 0;

    var form = angular.element(document.querySelector('.form-horizontal')),
        formWindow = angular.element(document.querySelector('.window')),
        errorLogin = angular.element(document.querySelector('.has-error2')),
        errorSignUp = angular.element(document.querySelector('.has-error'));




    ProductService.getProducts(function (products) {
        $scope.tovImg = products;
    });
    
    
    $scope.pushTov = function (targetTovar) {
        $scope.res = targetTovar;

        ProductService.getComments(targetTovar, $scope.token, function (cb) {
            var b = [];
            for (var i = 1; i <= cb.length; i++) {
                b.push(cb[cb.length - i]);
            }

            $scope.comment = b;
            angular.element(document.querySelector('.comments'))
                .css("display", "inline-block");
        })
    };


    // Авторизация
    
    $scope.formLogin = function () {
        angular.element(document.querySelector('.form_log_in'))
            .css("display", "block");
        formWindow.css("display", "block");
    };
    

    $scope.formSignUp = function () {
        form.css("display", "block");
        formWindow.css("display", "block");
    };


    $scope.signUp = function () {
        if (!$scope.pas || !$scope.log) {
            // angular.element(document.querySelector('.has-error3')).css("display", "block");
            return;

        }
        ProductService.signUp($scope.log, $scope.pas, function (cb) {

            if (cb.success === true) {

                $scope.token = cb.token;
                errorSignUp.css("display", "none");
                form.css("display", "none");
                formWindow.css("display", "none");
                angular.element(document.querySelector('.noautoriz')).css("display", "none");
                $scope.userName = $scope.log;

                $scope.pas = "";
                $scope.log = "";

            } else {
                $scope.pas = "";
                $scope.log = "";
                    errorSignUp.css("display", "block");
            }

        });


    };


    $scope.logIn = function () {
        if (!$scope.password || !$scope.login)  return;
        
        ProductService.logIn($scope.login, $scope.password, function (cb) {
            if (cb.success === true) {
                $scope.token = cb.token;
                errorLogin.css("display", "none");
                angular.element(document.querySelector('.form_log_in')).css("display", "none");
                formWindow.css("display", "none");

                angular.element(document.querySelector('.noautoriz')).css("display", "none");
                $scope.userName = $scope.login;
                $scope.password = "";
                $scope.login = "";
                
            } else {
                $scope.password = "";
                $scope.login = "";
                    errorLogin.css("display", "block");
            }

        });
    };


    $scope.signUpCancel = function () {
        form.css("display", "none");
        formWindow.css("display", "none");
        errorSignUp.css("display", "none");

        $scope.pas = "";
        $scope.log = "";
    };

    $scope.logInCancel = function () {
        angular.element(document.querySelector('.form_log_in'))
            .css("display", "none");
        errorLogin.css("display", "none");
        formWindow.css("display", "none");
        $scope.password = "";
        $scope.login = "";
    }
});