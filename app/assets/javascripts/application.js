// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .

document.addEventListener("turbolinks:load", function() {
  document.addEventListener("turbolinks:click", function() {
    var old_body =  $("body").clone();
    old_body.css({top: 0, left: 0, position: "absolute"});
    $("html").prepend(old_body);
  });

  document.addEventListener("turbolinks:request-end", function() {
    var body = $("body");
    body.css({top: 0, left: $(window).width(), position: "absolute"});
    body.animate({ left: 0}, function() {
      old_body.remove();
    });
  });
});
