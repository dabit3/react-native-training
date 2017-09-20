$(document).ready(function() {
  // Denver
  $("#denver-button").click(function() {
    setTimeout(function() {
      $(".denver").show();
    }, 1);
  })
  $(document).on('click touchstart', function(e) {
      var container = $(".denver");
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
          container.hide();
      }
  });

  // SF Bay
  $("#sf-button").click(function() {
    setTimeout(function() {
      $(".sf").show();
    }, 1);
  })
  $(document).on('click touchstart',function(e) {
    var container = $(".sf");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  });

  // Phoenix
  $("#phoenix-button").click(function() {
    setTimeout(function() {
      $(".phoenix").show();
    }, 1);
  })
  $(document).on('click touchstart', function(e) {
    var container = $(".phoenix");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  });

  // LA
  $("#la-button").click(function() {
    setTimeout(function() {
      $(".la").show();
    }, 1);
  })
  $(document).on('click touchstart', function(e) {
    var container = $(".la");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  });

  // Seattle
  $("#seattle-button").click(function() {
    setTimeout(function() {
      $(".seattle").show();
    }, 1);
  })
  $(document).on('click touchstart', function(e) {
    var container = $(".seattle");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  });

  // Boston
  $("#boston-button").click(function() {
    setTimeout(function() {
      $(".boston").show();
    }, 1);
  })
  $(document).on('click touchstart', function(e) {
    var container = $(".boston");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  });
})