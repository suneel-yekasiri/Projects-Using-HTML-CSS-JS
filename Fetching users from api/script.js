     
const getUsersBtn = document.getElementById("get-users-btn");
const userGrid = document.getElementById("user-grid");
const loader = document.getElementById("loader");
const goToHomeBtn = document.getElementById("get-users1-btn");


// Add event listener to Go to Home button

goToHomeBtn.addEventListener("click", () => {
window.location.href = "index.html";
});


const getUsers = async () => {
  try {

    // Show loader

    loader.style.display = "block";

    // Fetch user data from API

    const response = await fetch("https://reqres.in/api/users?page=1");
    const data =await response.json();

// Hide loader

loader.style.display="none";


// Clear existing user cards

userGrid.innerHTML = "";


// Loop through user data and create user cards

data.data.forEach((user) => {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userImg = document.createElement("img");
  userImg.src = user.avatar;
  userImg.alt = `${user.first_name} ${user.last_name}`;

  const userName = document.createElement("h2");
  userName.textContent = `${user.first_name} ${user.last_name}`;

  const userEmail = document.createElement("p");
  userEmail.textContent = user.email;

  userCard.appendChild(userImg);
  userCard.appendChild(userName);
  userCard.appendChild(userEmail);

  userGrid.appendChild(userCard);
});

} 


catch (error) {

// Hide loader

loader.style.display = "none";

// Display error message

alert("There was an error fetching the user data. Please try again later.");
}
};


getUsersBtn.addEventListener("click", getUsers);

const filterByName = (event) => {
const searchTerm = event.target.value.toLowerCase();
const userCards = document.querySelectorAll(".user-card");

userCards.forEach((card) => {
const userName = card.querySelector("h2").textContent.toLowerCase();

if (userName.includes(searchTerm)) {
card.style.display = "block";
} 
else {
card.style.display = "none";
}
});
};

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Filter by name...");
searchInput.addEventListener("input", filterByName);

const nav = document.querySelector("nav");
nav.appendChild(searchInput);
