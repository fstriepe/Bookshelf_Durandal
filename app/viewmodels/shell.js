define(['plugins/router', "durandal/app"], function (router, app) {
    return {
        router: router,

        search: function() {
            app.showMessage("Not Implemented", "Error");
        },

        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
                { route: 'book', moduleId:'viewmodels/book', title:"Book",nav: true},
                { route: 'book/:id', moduleId: 'viewmodels/editBook', title:"Edit book",nav: false},
                { route: 'add/book', moduleId: 'viewmodels/addBook', title:"Add Book"}
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
