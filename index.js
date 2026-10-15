

  function handleClickEvent(){
    $(document).off("click");     // Remove the click event listener to prevent multiple triggers
    var audioGrettings = new Audio ("assets/mahalaya.mp3");
    audioGrettings.play();
    $(".greetings").addClass("animi");
    $("body").addClass("animi-bg");

    setTimeout(() => {
    $(".greetings").removeClass("animi"); //remove the animation class after 57 seconds and add the click event listener back to the document
    $("body").removeClass("animi-bg");
     $(document).on("click", handleClickEvent);
    }, 57000);
  
  }

  $(document).on("click", handleClickEvent);// Add the click event listener to the document, function name must.