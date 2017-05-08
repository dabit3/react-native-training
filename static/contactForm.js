/****************************** 
TO USE THIS CONTACT FORM:

1. Include the following scripts/styles on the page (be sure to double check the paths):
<script src="../static/vex.combined.min.js"></script>
<script>
  vex.defaultOptions.className = 'vex-theme-wireframe'
  vex.dialog.buttons.YES.text = 'send'
</script>
<link rel="stylesheet" href="../static/vex.css">
<link rel="stylesheet" href="../static/vex-theme-wireframe.css">
<link rel="stylesheet" href="../static/contactForm.css">
<script src="../static/contactForm.js"></script>

2. You can now call contactForm() anywhere you want to use the contact form in a modal.
Ex: <button onClick="contactForm()">Contact Us</button>

3. Optional: If you'd prefer to use the markup of this form directly (as opposed to calling this
contactForm function), simply paste this markup wherever you'd like the form:


<form class="rnt-contact-form" action="https://formspree.io/xlgdbrpm" method="POST">
  <h2 class="rnt-contact-form-heading">Contact Us</h2>
  <p class="rnt-contact-form-text">Use our form below, our email us directly:<br><span><a href=\"mailto:info@reactnative.training\">info@reactnative.training</a></span></p>
  <div class="rnt-contact-form-fields">
  <select name="inquiry-type" id="rnt-inquiry-type" required>
      <option disabled selected value="">what's this about?</option>
      <option value="Corporate Training">corporate training</option>
      <option value="Workshops">workshops</option>
      <option value="General Inquiry">general inquiry</option>
    </select>
    <input type="text" name="name" placeholder="your name" required>
    <input type="text" name="_replyto" placeholder="your email" required>
    <textarea name="rnt-contact-message" placeholder="type your message here"></textarea>
    <input type="hidden" name="_subject" value="New contact form submission">
    <input type="text" name="_gotcha" style="display:none">
    <img src=../static/react-logo.svg class="react-spinner">
    <!--<input class="rnt-contact-submit" type="submit" value="Send">-->
  </div>
</form>
******************************/

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
        url: "https://formspree.io/xlgdbrpm", 
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