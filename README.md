# Tech-Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
Tech Blog application is designed to allow an user creating Posts and comments about tech in a Blog in that way all users can have access to general information and articles about that topic.

## Table of Contents:
- [The Challenge](#Challenges-Faced)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [License](#License)
- [Author](#Author)

## Challenges Faced
Building a CMS-application from the scratch and have appropiate interaction on the Front and Backend area by retrieving data and customizing it as well.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Installation Process
1. Clone the repository created on Github on your VSC code to start working on it.
2. Install the following through CLI:
- Node JS.
- Express.JS
- MySQL
- Nodemon.
- Insomnia.
- Sequelize and Dependencies (dotenv).
3. Make sure to modify your .env file to ensure you're storing your Username and Password information to have access to your database.

## Usage Instructions
Once having those dependencies and packages installed in your machine:

1. Open the terminal and access to your mysql database at `mysql -u root -p` + `your-password`.
2. Once opening your database sql, quit from mysql and run `npm run seed` for easier purposes => That's gonna run your seeded index.js file.
3. Run `node server.js` to start running your application on a PORT, and navigate through it.

## Built With
- Visual Studio Code VSC for code edition.
- JavaScript.
- Node JS.
- Express JS
- MySQL.
- Sequelize

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author
[Maria Angulo](https://github.com/maferadr)
