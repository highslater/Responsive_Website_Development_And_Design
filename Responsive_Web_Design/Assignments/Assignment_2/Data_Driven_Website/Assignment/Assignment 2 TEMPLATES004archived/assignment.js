// put your javascript code here
/*

A JavaScript file that maps the data onto the templates and provides any interactivity
The layout of the site should be appropriate to the data and display it in a clear and understandable way. It should provide suitable navigation functions and the overall layout and design should reflect the guidelines we have described in this MOOC.


*/


$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(this).find('span').toggleClass('glyphicon-arrow-left').toggleClass('glyphicon-arrow-right');
    });

    $('#nav-menu-toggle').click(function () {
        $(this).toggleClass('glyphicon-arrow-up').toggleClass('glyphicon-arrow-down');
    });

    var detail_source = $("#detail-template").html();
    var detail_template = Handlebars.compile(detail_source);

    var home_source = $("#home-template").html();
    var home_template = Handlebars.compile(home_source);

    var reptiles_source = $("#reptiles-template").html();
    var reptiles_template = Handlebars.compile(reptiles_source);

    var mammals_source = $("#mammals-template").html();
    var mammals_template = Handlebars.compile(mammals_source);

    var birds_source = $("#birds-template").html();
    var birds_template = Handlebars.compile(birds_source);


    $(document).on("click", ".js-image_click", function () {
        var html = detail_template(data0);
        $('#content').html(html);
    });

    $(document).on("click", ".js-home", function () {
        var html = home_template();
        $('#content').html(html);
    });

    $(document).on("click", ".js-reptiles", function () {
        var html = reptiles_template();
        $('#content').html(html);
    });

    $(document).on("click", ".js-mammals", function () {
        var html = mammals_template();
        $('#content').html(html);
    });

    $(document).on("click", ".js-birds", function () {
        var html = birds_template();
        $('#content').html(html);
    });
});