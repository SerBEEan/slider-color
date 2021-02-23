$( function() {
  const buttonColor = $("button[name=color]");
  const buttonBackground = $("button[name=background]");

  let toggleProperty = "color"
  let lastButton = buttonColor;
  createSlider.call(lastButton, toggleProperty);


  buttonColor.on('click', createSlider.bind(buttonColor, "color"))
  buttonBackground.on('click', createSlider.bind(buttonBackground, "background"))

  function createSlider(property) {
    $( ".slider" )
      .slider({
        min: 0,
        max: 255,
        range: "min",
        change: function( event, ui ) {
          $( "#show" ).css(property, `rgb(
            ${ $( "#slider1" ).slider( "value" ) },
            ${ $( "#slider2" ).slider( "value" ) },
            ${ $( "#slider3" ).slider( "value" ) })`
          );
        }
      });

    this.addClass("ui-state-active");
    lastButton !== this && lastButton.removeClass("ui-state-active");
    lastButton = this;

    toggleProperty = property;
  }

});
