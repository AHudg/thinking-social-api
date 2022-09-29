# thinking-social-api

## -=Project Description=-

Utilizing NoSQL, this challenge expanded our database toolkit by introducing a new, less strict way to create databases. This server hosts the back-end for a social media application revolving around user's creating thoughts and allowing other users or themselves to react to said thoughts. A very basic friends list was also included in the design. The application was created using MongoDB, Mongoose, and Express.

---

## Table of Contents

- [Installation Instructions](#installation)
- [Usage](#usage)
- [Database Relations](#database-relations)
- [Contact Information](#contact)

---

## -=Installation=-

Before running the program, install the _npm dependencies_ with:

<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
npm i
</div>
<br>
These include:

- express-- Node.js framework that provides multiple features to aid in managing servers and routes, allowing the creation of a RESTful API
- mongodb-- a document database focusing on scalability and flexibility of data
- mongoose-- an Object Data Modeling (ODM) library used to manage the relationships and schema for mongodb

<br>

## -=Usage=-

To run the code, start the server from the command line by typing:

<div style="background-color:rgba(0, 0, 0, 0.25); vertical-align: middle; padding:10px 20px; border-radius: 10px">
node server.js <em>OR</em> npm start
</div>

<br>
in the command line of the root directory to launch the server. Due to not having a front-end, the application's utility can only be viewed through Insomnia. 
<br><br>

## -= Database Relations =-

The data for this application is broken into four main components: User model, Thought model, Friends functionality, and the Reaction schema. When a user is created, they start as a blank slate. From here, they can add or delete friends by referencing another user's id. They can create thoughts now that they have a username to associate them with. Lastly once a thought is created, the user can also add reactions. When a thought is deleted, the user is updated to show the removal of that thought. When a user is deleted, the thoughts are also queried to remove any thoughts associated with that user.

## -=Contact=-

Check out the [walkthrough video](https://drive.google.com/file/d/1lkwkgFXveWjKz9J0zVTgrVjc2CphGcK3/view) and feel free to look at my other work on my [GitHub](https://github.com/AHudg).

Made by Andrew Hudgins :)
