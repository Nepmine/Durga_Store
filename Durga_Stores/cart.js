// Remove Items From Cart
// $('a.remove').click(function(){
//     event.preventDefault();
//     $( this ).parent().parent().parent().hide( 400 );
   
//   })
  
//   // Just for testing, show all items
//     $('a.btn.continue').click(function(){
//       $('li.items').show(400);
//     })
  

// $('a.remove').click(function(event){ // Add 'event' parameter here
//     event.preventDefault();
//     $(this).closest('.items').hide(400); // Use 'closest' to find the closest parent with class 'items'
// });

// // Just for testing, show all items
// $('a.btn.continue').click(function(){
//     $('li.items').show(400);
// });

// $('a.remove').click(function(event){
//     event.preventDefault();
//     $(this).closest('.items').hide(400, function() {
//         $(this).remove(); // Remove the element after hiding
//     });
// });

// // Just for testing, show all items
// $('a.btn.continue').click(function(){
//     $('li.items').show(400);
// });

$(document).on('click', 'a.remove', function(event){
    event.preventDefault();
    $(this).closest('.items').hide(400, function() {
        $(this).remove();
    });
});

// Just for testing, show all items
$('a.btn.continue').click(function(){
    $('li.items').show(400);
});