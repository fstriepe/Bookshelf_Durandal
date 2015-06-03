define(["knockout", "durandal/app", "durandal/system","plugins/http"], function (ko, app, system,http) {

    var books = ko.observableArray([]);
    var url ='http://localhost:8080/book';
    
    $.ajaxSetup({
        url:url,
        type: 'GET',
        contentType: "application/json"
    });

    return {
        books: books,
        activate: function () {
            var self = this;

            $.ajax({
                success: function (data) {
                    books(data);
                },
                error: function (xhr, status, error) {
                    console.log(status + '; ' + error);
                }
            });

            self.deleteBook = function (book) {
                $.ajax({
                    url: url+'/'+book.id, type: 'DELETE',
                    success: function () {
                        self.books.remove(book);
                    },
                    error: function (xhr, status, error) {
                        console.log(status + '; ' + error);
                    }
                });

            }
        }
    };
});



