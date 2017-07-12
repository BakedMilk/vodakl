
$( ".express-delivery-button" ).click(function( event ) {
  event.preventDefault();
});
$( "#actions" ).click(function( event ) {
  $( this ).hide();
  console.log('it works!');
});