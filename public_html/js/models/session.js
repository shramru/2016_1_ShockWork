define([
    'backbone'
], function (
    Backbone
) {

    var SessionModel = Backbone.Model.extend({
        urlLogin: '/api/session/',
        urlRegistration: '/api/user/',

        login: function (username, password) {
            $.ajax({
                type: 'PUT',
                url: this.urlLogin,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({
                    login: username,
                    password: password
                }),
                success: function (data) {
                    // TODO
                },
                error: function (xhr, str) {
                    // TODO
                }

            });
        },

        isLoggedIn: function() {
            $.ajax({
                type: 'GET',
                url: this.urlLogin,
                success: function (data) {
                    // TODO
                },
                error: function (xhr, str) {
                    // TODO
                }

            });
        },

        logout: function() {
            $.ajax({
                type: 'DELETE',
                url: this.urlLogin,
                success: function () {
                //    TODO
                },
                error: function () {
                //    TODO
                }

            });
        },

        registration: function(username, password, email) {
            $.ajax({
                type: 'PUT',
                url: this.urlRegistration,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({
                    login: username,
                    password: password,
                    email: email
                }),
                success: function () {
                //    TODO
                },
                error: function () {
                //    TODO
                }

            });
        },

        validateLogin: function(username, password) {
            if (username && password) {
            } else {
                return false
            }
            return true;
        },

        validateRegistration: function(email, username, password1, password2) {
            var errors = {
                'all': 'Required',
                'passwords': 'Passwords dont match',
                'email_validation': 'Example lala@mail.ru',
                'None': 'None'
                };
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ( !(email && username && password1 && password2) ) {
                return errors['all']
            } else if ( !(password1 === password2) ){
                return errors['passwords']
            } else if (!re.test(email)) {
                return errors['email_validation'];
            }
            return errors['None'];
        }

    });



    return new SessionModel();

});