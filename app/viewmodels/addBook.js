define(function (require) {
    var http = require('plugins/http'),
        ko = require('knockout'),
        app = require('durandal/app'),
        koVal = require('knockout-validation');

    var title = ko.observable().extend({ required:{ params: true, message: 'Title is mandatory.' } });
    var isbn = ko.observable().extend({ required: { params: true, message: 'Isbn is mandatory.' }, minLength: 3, pattern: {
            message :' This is not a valid isbn.',
            params:'/((978[\--– ])?[0-9][0-9\--– ]{10}[\--– ][0-9xX])|((978)?[0-9]{9}[0-9Xx])/'  }  });
    var description =  ko.observable();
    var price =ko.observable();

    var Book = function() {
        this.title= title,
        this.isbn= isbn,
        this.description= description,
        this.price= price
    };

    return {
        Book:Book,
        title : title,
        isbn : isbn,
        description: description,
        price : price,

        activate: function (){
            var self=this;
            var url = 'http://localhost:8080/book/';

            self.addBook = function(){
                if( title.isValid() == false || isbn.isValid() == false ){
                    app.showMessage("Please fix the errors :  <br />" + this.title.error() +" <br /> "+ this.isbn.error(), "Error");
                }else{
                    var dataToSend =ko.toJSON({ title: this.title, isbn : this.isbn, description : this.description, price : this.price });
                    $.ajax({
                        url: url,
                        type: 'POST',
                        contentType: "application/json",
                        dataType: "json",
                        data:  dataToSend,
                        success: function(status) {
                            alert( 'Book added' );
                        },
                        error: function(xhr, status, error) {
                            alert( 'Book not added :' + error );
                        }
                    });
                }
            };
        }
    }
});






