$(document).ready(function() {
  
  $('#dismiss').click(function() {
    $('.overlay').hide()
  })

  $('.scrolltoworkshops').click(function() {
     $('html, body').animate({
          scrollTop: $("#upcomingworkshops").offset().top - 60
      }, 600);
  })

  $('#request-city').click(function() {
    $('.overlay').show()
  })

  $('#submit-email').click(function() {
      console.log('clicked')
      var message = $('#form-message').val();
      var varData = 'message=' + message;

      if((message != "")) {
          $.ajax({
              type: "POST",
              url: "/static/sendmail.php",
              data: varData,
              success: function() {
                  $('.overlay').hide()
                  swal({
                    title: "Thanks",
                    text: "We'll make sure we put " + message + " on our list!",
                    type: "success",
                    confirmButtonText: "OK" });
              }
          });
          return false;
      }
  })

});