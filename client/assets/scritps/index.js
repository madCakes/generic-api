function displayRestaurantDetails(data) {
  // Get a reference to the heading
  const heading = document.getElementById("resturant-name");

  // Set the heading to the restaurant name
  heading.textContent = data["name"];

  const year = document.getElementById("established-year");
  year.textContent = data["established"];

  document.getElementById("resturant-name").textContent = data["status"];
}

function loadResturantDetails() {
  const url = "http//localhost:3000";

  fetch("url")
    .then((res) => res.json())
    .then((data) => displayRestaurantDetails(data))
    .catch(console.log(err));
}

loadResturantDetails();
