// Instantiate GitHub class
const github = new Github;

// Instantiate UI class
const ui = new UI;

// Listen for keyup event

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener to search input
searchUser.addEventListener('keyup', (e) => {
  // Get the text that is being typed in
  const userText = e.target.value;
  // console.log(userText);

  // Make sure input is not blank
  if(userText !== '') {
    // Continue making http call to GitHub API

    // Make HTTP call to get user
    github.getUser(userText)
          .then(data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
                // Show Alert that user is not Found
                // This will happen through ui class (ui.js)
                ui.showAlert('User not found!', 'alert alert-danger');

            } else {
                // Show Profile
                // This will happen through ui class (ui.js)
                ui.showProfile(data.profile);

                // Show repositories
                ui.showRepos(data.repos);
            }
          })

  } else {
    // Clear the profile
    // This will happen through ui class (ui.js)
    ui.clearProfile();
  }
})
