var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        // Element 'el' jest divem
        this.el = $('<div/>');

        logowanie("ala");
        logowanie("ma");
        logowanie("kota");
        logowanie("ala");
        logowanie("ma");
        logowanie("kota");
        logowanie("ala");
        logowanie("ma");
        logowanie("kota");
        logowanie("ala");
        logowanie("ma");
        logowanie("kota");



        //podpinamy zdarzenie pod elementy z okreslona klasa, ktore beda znajdowac sie w naszym div'ie
        this.el.on('keyup', '.search-key', this.findByName);
    };

    //renderuje widok i zwraca caly obiekt 'HomeView'
    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

    this.findByName = function () {
        logowanie("find by name");
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    };

    this.initialize();

}

function logowanie(tresc)
{
    $('#logger').append("</br>" + tresc);
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());