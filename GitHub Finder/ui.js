class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    console.log('UI class');
    // console.log(user);

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Company:</strong> ${user.company}</li>
              <li class="list-group-item"><strong>Website/Blog:</strong> <a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item"><strong>Location:</strong> ${user.location}</li>
              <li class="list-group-item"><strong>Member Since:</strong> ${new Date(user.created_at).toDateString()}</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="page-heading mb-3">Latest Repositories</h3>
      <div id="repos">
      </div>

    `;
  }

  // Show user repositories
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                <span class="badge badge-info">Language: ${repo.language}</span>
                
            </div>
          </div>
        </div>
      `
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
      // Create remain alerts
      this.clearAlert();

      // Create div
      const div = document.createElement('div');
      div.className = className;

      // Add text
      div.appendChild(document.createTextNode(message));

      // Get parent
      const container = document.querySelector('.searchContainer');

      // Get the search box
      const search = document.querySelector('.search');

      // Insert alert before search container
      container.insertBefore(div, search)

      // Disappear alert message after 3 seconds
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }


}
