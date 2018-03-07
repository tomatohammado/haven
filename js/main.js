// Function makes the scrolling of IDs smooth

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// pushes and logs information on firebase database

var myDataRef = new Firebase("https://amber-inferno-4641.firebaseio.com/");
        $("#form-fields").submit(function(e) {
          console.log("I work");
          e.preventDefault();
          var emailForm = $('#jsEmail').val();
          myDataRef.push({'email': emailForm);
        });
