# Github Profile Finder

- In 'Github Profile Finder', we can search GitHub users by their GitHub username and we will get user's profile information along with links to latest 5 repositories as you type in search query.
- Every time you type something (every word), the application will make a request to github looking for the typed username [Use of keyup event] and respective user information matching the query will be displayed. If user not found, alert message will be displayed which will disappear after 3000 seconds.
- The profile information will contain avatar, link to user's github profile along with his profile information such as his company, link to webite or blog, location and the his membership information.
- The latest 5 repositories will be displayed along with link to repository and other related  parameters such as number of stars, number of watchers, number of forks and the language used in the repository.
- This application makes use of GitHub API and in order to make infinite request to GitHub API, you need to register the GitHub application and it can be registered at https://github.com/settings/applications/new
- Once you register the application, you get client_id and client_secret information and with use of these keys in your application, you can make infinite request to GitHub API.
- For normal testing purpose and to check the response, you can visit
  -  https://api.github.com/users/{PUT USERNAME} e.g. https://api.github.com/users/patilankita79 for getting profile information and 
  - https://api.github.com/users/{PUT USERNAME}/repos e.g. https://api.github.com/users/patilankita79/repos for getting repository information of given user.

For example, response of https://api.github.com/users/patilankita79

```
{
  "login": "patilankita79",
  "id": 22652292,
  "avatar_url": "https://avatars2.githubusercontent.com/u/22652292?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/patilankita79",
  "html_url": "https://github.com/patilankita79",
  "followers_url": "https://api.github.com/users/patilankita79/followers",
  "following_url": "https://api.github.com/users/patilankita79/following{/other_user}",
  "gists_url": "https://api.github.com/users/patilankita79/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/patilankita79/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/patilankita79/subscriptions",
  "organizations_url": "https://api.github.com/users/patilankita79/orgs",
  "repos_url": "https://api.github.com/users/patilankita79/repos",
  "events_url": "https://api.github.com/users/patilankita79/events{/privacy}",
  "received_events_url": "https://api.github.com/users/patilankita79/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ankita Patil",
  "company": "The University of Texas at Dallas",
  "blog": "https://www.linkedin.com/in/ankita-patil79/",
  "location": "Dallas, Texas",
  "email": null,
  "hireable": true,
  "bio": null,
  "public_repos": 70,
  "public_gists": 0,
  "followers": 17,
  "following": 81,
  "created_at": "2016-10-06T04:39:44Z",
  "updated_at": "2018-01-11T22:16:10Z"
}
```

<hr>

## Approach

<blockquote>Use of async/await and fetch API for asynchronous programming</blockquote>

1. Register an application with GitHub at https://github.com/settings/applications/new and get an API key
2. Building User Interface **(index.html)**
  - Use of Bootswatch (Free themes for Bootstrap 4)
  - Name of the theme used - Litera
3. Fetching Profile Data from GitHub **(github.js)**
  - github.js takes care of reaching out to GitHub API using fetch API
  - Making use of 2 endpoints 
    - To get user information (Profile response) =>  https://api.github.com/users/{PUT USERNAME DYNAMICALLY HERE}
    - To get information about User's repositories [Repo response] => https://api.github.com/users/{PUT USERNAME DYNAMICALLY HERE}/repos
4. Render the profile information and latest repositories in DOM i.e in UI **(ui.js)**
  - UI class is used to handle inserting related tasks to DOM
  - Basically, ui.js is responsible for dynamically changing the UI as user types query.
5. Show alert message in case we don't find the user profile with typed query.

<hr>

## Technology Stack or Concepts used

- HTML5
- JavaScript
- Bootswatch
- **Text Editor:** Atom
- **Deployment platform :** firebase
- **API:** GitHub API
- Use of async/await, promises and fetch API

<hr>

## Deployment

The web application is hosted on firebase. 
Live Demo: https://githubfinder-5c0d4.firebaseapp.com/

<hr>

## Problems faced

- Even if you don't register your application and get GitHub API key, you can still make a request to GitHub endpoints related to user and repo but only for certain amount of time. If you exceed request limit, so for particular time you might get forbidden error
- To avoid the problem, I registered the application and got secret key and secret id and now I can make infinite requests to GitHub API

<hr>

## Using this application

If you download this application or clone this repository, do not forget to add your own client secret id and client secret key
   
<hr>

## References

- https://github.com/settings/applications/new
- https://developer.github.com/v3/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
- https://bootswatch.com/litera/
