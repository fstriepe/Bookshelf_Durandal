requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal': '../bower_components/durandal/js',
        'plugins': '../bower_components/durandal/js/plugins',
        'transitions': '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout.debug',
        'knockout-validation': '../bower_components/knockout-validation/dist/knockout.validation.min',
        'jquery': '../bower_components/jquery/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'i18next': '../bower_components/i18next/i18next.amd.withJQuery.min'
    },
    shim: {
    bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        },
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap','durandal/binder','i18next'],  function (system, app, viewLocator,binder,i18n) {

    var i18NOptions = {
        detectFromHeaders: false,
        lng:  'fr',
        fallbackLang: 'en',
        ns: 'app',
        resGetPath: 'locales/__lng__/__ns__.json',
        useCookie: false
    };


    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = "BookStore_FO";

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        // Setup of i18n
/*
        i18n.init(i18NOptions, function () {
            //Call localization on view before binding...
            binder.binding = function (obj, view) {
                $(view).i18n();
            };
*/

            // Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            // Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            // Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell');



    });

});
