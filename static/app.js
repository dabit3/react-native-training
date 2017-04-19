$(document).ready(function() {
  
  $('#dismiss').click(function() {
    $('.overlay').hide()
  })

  $('.scrolltoworkshops').click(function() {
     $('html, body').animate({
          scrollTop: $("#upcomingworkshops").offset().top - 30
      }, 900);
  })

  $('.scrolltoprivatetraining').click(function() {
     $('html, body').animate({
          scrollTop: $("#onsitetraining").offset().top - 30
      }, 600);
  })


  $('.scrolltous').click(function() {
     $('html, body').animate({
          scrollTop: $("#whomain").offset().top - 30
      }, 600);
  })

  $('#request-city').click(function() {
    $('.overlay').show()
  })

  $('#submit-email').click(function() {
      var message = $('#form-message1').val();
      var email = $('#form-message2').val();
      var varData = 'message=' + message + '&email=' + email;

      if((message != "")) {
          $.ajax({
              type: "POST",
              url: "/static/sendmail.php",
              data: varData,
              success: function() {
                  $('.overlay').hide()
                  $('#form-message1').val('');
                  $('#form-message2').val('');
                  swal({
                    title: "Thanks",
                    text: "Thanks for your feedback! If you submitted your email, we'll make sure we notify you when we come to " + message + "!",
                    type: "success",
                    confirmButtonText: "OK" });
              }
          });
          return false;
      }
  })

  $('#emailsubmit').click(function() {
      var message = $('#emailinput').val();
      var varData = 'message=' + message;

      if((message != "")) {
          $.ajax({
              type: "POST",
              url: "/static/addtomailinglist.php",
              data: varData,
              success: function() {
                  $('#emailinput').val('');
                  $('.overlay').hide()
                  swal({
                    title: "Thanks",
                    text: "You've been added to our email list!",
                    type: "success",
                    confirmButtonText: "OK" });
              }
          });
          return false;
      }
  })

});