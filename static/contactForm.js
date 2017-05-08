var contactForm = function() {
  vex.dialog.open({
    showCloseButton: true,
    input: [
        '<h2 class="rnt-contact-form-heading">Contact Us</h2>',
        '<p class="rnt-contact-form-text">Use our form below, our email us directly:<br><span><a href=\"mailto:info@reactnative.training\">info@reactnative.training</a></span></p>',
        '<div class="rnt-contact-form-fields">',
        '<select name="inquiry-type" id="rnt-inquiry-type" required>',
            '<option disabled selected value="">What\'s this about?</option>',
            '<option value="Corporate Training">Corporate Training</option>',
            '<option value="Workshops">Workshops</option>',
            '<option value="General Inquiry">General Inquiry</option>',
          '</select>',
          '<input type="text" name="name" placeholder="Your name" required>',
          '<input type="text" name="_replyto" placeholder="Your email" required>',
          '<textarea name="rnt-contact-message" placeholder="Type your message here"></textarea>',
          '<input type="hidden" name="_subject" value="New contact form submission">',
          '<input type="text" name="_gotcha" style="display:none">',
          '<!--<input class="rnt-contact-submit" type="submit" value="Send">-->',
        '</div>'
    ].join(''),
    callback: function (data) {
      if (!data) {
        return console.log('Cancelled')
      }
      $.ajax({
        url: "https://formspree.io/xqekropx", 
        method: "POST",
        data: data,
        dataType: "json"
      });
    }
  })
}