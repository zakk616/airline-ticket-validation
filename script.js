document.querySelector("#trip").addEventListener("change", function (e) {
  var tripType = document.querySelector("#trip").value;
  var dateToday = new Date().toLocaleDateString();

  if (tripType === "One-Way") {
    document.getElementById("round-trip").hidden = true;
    document.getElementById("multi-city").hidden = true;
    console.log(tripType);
  } else if (tripType === "Round-trip") {
    document.getElementById("round-trip").hidden = false;
    document.getElementById("multi-city").hidden = true;
    console.log(tripType);
  } else if (tripType === "Multi-city") {
    document.getElementById("round-trip").hidden = true;
    document.getElementById("multi-city").hidden = false;
    console.log(tripType);
  } else {
    document.getElementById("round-trip").hidden = true;
    document.getElementById("multi-city").hidden = true;
    console.log(tripType);
  }
});

// add more trips
$(document).ready(function () {
  var max_fields = 5; //maximum trips allowed
  var wrapper = $("#multi-city-depart");
  var add_button = $("#addFlight");

  var x = 1;
  $(add_button).click(function (e) {
    e.preventDefault();
    if (x < max_fields) {
      x++;
      $(wrapper).after(
        '<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text input-group-icon" id="lblFrom"><i class="fa-solid fa-plane-departure"></i></span> </div> <input type="text" class="form-control" placeholder="From" name="from" id="from" aria-label="from" aria-describedby="lblFrom" required/></div><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text input-group-icon" id="lblTo"><i class="fa-solid fa-plane-arrival"></i></span></div><input type="text" class="form-control" placeholder="To" name="to" id="to" aria-label="to" aria-describedby="lblTo" required /></div><div class="input-group mb-3" id="multi-city-depart"><div class="input-group-prepend"><span class="input-group-text input-group-icon" id="lblDepart"><i class="fa-solid fa-calendar-days"></i></span></div><input class="form-control" placeholder="Departure Date" onfocus="(this.type="date")" onblur="(this.type="text")" name="depart" id="depart" aria-label="depart" aria-describedby="lblDepart" required/></div>'
      );
    } else {
      document.getElementById("addFlight").hidden = true;
    }
  });
});

function validateForm() {
  console.log("validateForm");
  var tripType = document.querySelector("#trip").value;
  var dateToday = new Date().toLocaleDateString();
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var depart = new Date(
    document.getElementById("departDate1").value
  ).toLocaleDateString();
  var returnDate = new Date(
    document.getElementById("returnDate").value
  ).toLocaleDateString();

  if (tripType === "One-Way") {
    console.log("One-Way");
    if (depart < dateToday) {
      console.log(depart);
      console.log(dateToday);
      alert("Please enter a valid date");
      return false;
    } else if (from === to) {
      alert("Please enter valid source and destination");
      return false;
    } else {
      alert("OneWay-trip Ticket Booking successful");
      location.reload();
      return true;
    }
  } else if (tripType === "Round-trip") {
    console.log("Round-trip");
    if (from === to) {
      alert("Please enter valid source and destination");
      return false;
    } else if (depart < dateToday) {
      console.log(depart);
      console.log(dateToday);
      alert("Please enter a valid date");
      return false;
    } else if (returnDate < depart) {
      console.log(depart);
      console.log(returnDate);
      alert("Please enter a valid date");
      return false;
    } else {
      alert("Round-trip Ticket Booking successful");
      location.reload();
      return true;
    }
  } else if (tripType === "Multi-city") {
    if (from === to) {
      alert("Please enter valid source and destination");
      return false;
    } else if (depart < dateToday) {
      alert("Please enter a valid date");
      return false;
    } else {
      alert("MultiCity-trip Ticket Booking successful");
      location.reload();
      return true;
    }
  } else {
    alert("Please select a trip type");
    return false;
  }
}
