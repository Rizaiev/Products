app.service('ProductService', ["$http", function ($http) {


    this.getProducts = function (cb) {
        var req = {
            method: 'GET',
            url: 'http://smktesting.herokuapp.com/api/products/',
            headers: {
                "Authorization": ""
            }
        };

        return $http(req)
            .success(function (response) {

                cb(response);

            });
    };

    this.getComments = function (targetTovar, token, cb) {
        var req3 = {
            method: 'GET',
            url: 'http://smktesting.herokuapp.com/api/reviews/' + targetTovar.id,
            headers: {
                "Authorization": token
            }
        };
        $http(req3)
            .success(function (response) {

                cb(response);
            })
            .error(function (response) {

            });
    };

    this.postComment = function (idProduct, textComment, token, rate, cb) {
        var req2 = {
            method: 'POST',
            url: 'http://smktesting.herokuapp.com/api/reviews/' + idProduct.id,
            headers: {
                "Authorization": "Token " + token
            },
            data: {
                "rate": rate,
                "text": textComment
            }
        };


        $http(req2)
            .success(function (response) {


            })
            .error(function (response) {

                cb(response)
            });
    };

    this.signUp = function (login, password, cb) {
        var regForm = JSON.stringify(
            {
                "username": login,
                "password": password
            });

        $http.post('http://smktesting.herokuapp.com/api/register/', regForm)
            .success(function (response) {

                cb(response);

            })
            .error(function (response) {

            });
    };

    
    this.logIn = function (login, password, cb) {
        var logForm = JSON.stringify(
            {
                "username": login,
                "password": password
            });

        $http.post('http://smktesting.herokuapp.com/api/login/', logForm)
         .success(function (response) {

             cb(response);

         })
         .error(function (response) {

         });

    }

}]);


