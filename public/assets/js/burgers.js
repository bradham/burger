$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).value("id"); //.data or .value?
      console.log("id in .js file: " + id);
      //var newSleep = $(this).data("newsleep");
  
    //   var newSleepState = {
    //     sleepy: newSleep
    //   };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id , {
        type: "PUT"
        //data: newSleepState
      }
      ).then(
        function() {
          //console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        });
    });
})  