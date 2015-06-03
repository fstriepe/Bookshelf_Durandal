define(["knockout", "durandal/app", "durandal/system","plugins/http"], function (ko, app, system,http) {
    var url = 'http://localhost:8080/book/';

    var title= ko.observable(),
        isbn = ko.observable(),
        description= ko.observable(),
        price = ko.observable();

   var Book = function() {
        this.title= title,
        this.isbn= isbn,
        this.description= description,
        this.price= price
    };

    var restService = function(url, action){
        $.ajax({
            url: url, type: action, contentType: "application/json", dataType: "json",
            success: function(data) {
                title=data.title;
                isbn=data.isbn;
                description=data.description;
                price=data.price;
            },
            error: function(xhr, status, error) {
                console.log(status + '; ' + error);
            }
        });
    };

    return {
        Book: Book,
        title : title,
        isbn : isbn,
        description: description,
        price : price,
        activate: function (id){
            restService(url+id,'GET');

            self.editBook = function(){
                var dataToSend =ko.toJSON({ title: this.title, isbn : this.isbn, description : this.description, price : this.price })
                $.ajax({
                    url: url, type: 'POST', contentType: "application/json", dataType: "json", data:  dataToSend,
                    success: function(status) {
                        //alert( status );
                    },
                    error: function(xhr, status, error) {
                        //alert(status + '; ' + error);
                    }
                });
            }
        }
    };
});



