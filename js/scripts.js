$(document).ready(function() {
  $("#bff").click(function(event) {
    event.preventDefault();

    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age >= 35 && gender === "female") {
      $("#brieLarsson").show();
    }  else if (age <= 35 && gender === "female") {
      $("#galGadot").show();
    }
      else if (age <= 40 && gender === "male") {
      $("#jonSnow").show();
    }  else {
      $("#bradPitt").show();
    }
  });
});
