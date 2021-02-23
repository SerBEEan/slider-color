$( function() {
  const buttonColor = $( "button[name=color]" );
  const buttonBackground = $( "button[name=background]" );
  const blockShow = $( "#show" );
  const slider1 = $( "#slider1" );
  const slider2 = $( "#slider2" );
  const slider3 = $( "#slider3" );

  const history = {
    color: { r: 0, g: 0, b: 0 },
    background: { r: 255, g: 255, b: 255 }
  };

  let toggleProperty = "color";
  let lastProperty = "background";

  let lastButton = buttonColor;


  buttonColor.on("click", updateSlider.bind(buttonColor, "color"))
  buttonBackground.on("click", updateSlider.bind(buttonBackground, "background"))

  $( ".slider" )
    .slider({
      min: 0,
      max: 255,
      range: "min",
      change: function( event, ui ) {
        blockShow.css(toggleProperty, `rgb(
          ${ slider1.slider("value") },
          ${ slider2.slider("value") },
          ${ slider3.slider("value") })`
        );
      }
    });

  buttonColor.addClass("ui-state-active");


  function updateSlider(property) {
    history[toggleProperty].r = slider1.slider("value");
    history[toggleProperty].g = slider2.slider("value");
    history[toggleProperty].b = slider3.slider("value");

    this.addClass("ui-state-active");
    lastButton.removeClass("ui-state-active");
    lastButton = this;

    lastProperty = toggleProperty;
    toggleProperty = property;

    slider1.slider("value", history[toggleProperty].r);
    slider2.slider("value", history[toggleProperty].g);
    slider3.slider("value", history[toggleProperty].b);
  }

});
