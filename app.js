$(document).ready(function() {
  var imageFile = ["image.jpg", "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"];
  var currentIndex = 0;
  setInterval(function() {
    if (currentIndex == imageFile.length) {
      currentIndex = 0;
    }
    console.log(imageFile[currentIndex]);
    $("body").css('background-image', 'url("project-images/' + imageFile[currentIndex++] + '")');
  }, 5000);
});

$('document').ready(function(){
  $('#search').click(function() {
    var userInput = $('#userInput').val();
    var website = ["sortable_name", "distance",  "address1", "website"];
    console.log(userInput);
    $.getJSON('https://www.vegguide.org/search/by-address/' + userInput)
      .done(function(data) {
        console.log(data.entries);
        for (var i = 0; i < data.entries.length; i++) {
          console.log(data.entries[i].sortable_name)
          $('#data').append("<li>" + data.entries[i].sortable_name+ "</li>")
        }
      })
      .fail(function(err) {

      })


  })
})
