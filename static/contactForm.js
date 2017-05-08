var contactForm = function() {
  vex.dialog.open({
    showCloseButton: true,
    input: [
        '<h2 class="rnt-contact-form-heading">Contact Us</h2>',
        '<p class="rnt-contact-form-text">Use our form below, our email us directly:<br><span><a href=\"mailto:info@reactnative.training\">info@reactnative.training</a></span></p>',
        '<div class="rnt-contact-form-fields">',
        '<select name="inquiry-type" id="rnt-inquiry-type" required>',
            '<option disabled selected value="">what\'s this about?</option>',
            '<option value="Corporate Training">corporate training</option>',
            '<option value="Workshops">workshops</option>',
            '<option value="General Inquiry">general inquiry</option>',
          '</select>',
          '<input type="text" name="name" placeholder="your name" required>',
          '<input type="text" name="_replyto" placeholder="your email" required>',
          '<textarea name="rnt-contact-message" placeholder="type your message here"></textarea>',
          '<input type="hidden" name="_subject" value="New contact form submission">',
          '<input type="text" name="_gotcha" style="display:none">',
          '<img src=../static/react-logo.svg class="react-spinner">',
          '<!--<input class="rnt-contact-submit" type="submit" value="Send">-->',
        '</div>'
    ].join(''),
    callback: function (data) {
      if (!data) {
        return console.log('Cancelled')
      }
      $('.react-spinner').show();
      $.ajax({
        url: "https://formspree.io/xqekropx", 
        method: "POST",
        data: data,
        dataType: "json",
        success: function() {
          vex.dialog.open({
            message: 'Message sent. Thanks!',
            buttons: [
              $.extend({}, vex.dialog.buttons.YES, { text: 'Close' }),
            ]
          })
        },
        error: function(error) {
          vex.dialog.open({
            message: 'Something went wrong. Please try again.',
            buttons: [
              $.extend({}, vex.dialog.buttons.YES, { text: 'Close' }),
            ]
          })
          console.log(error)
        }
      })
    }
  })
}