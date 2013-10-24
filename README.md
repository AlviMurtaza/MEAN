## How to use angular-express-seed

Clone the angular-express-seed repository, run `npm install` to grab the dependencies, and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## Checkout:

      http://alvimurtaza-crud.jit.su/

## Directory Layout

    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      stylesheets/              --> css files
        style.css         --> stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
          angular/
            angular.js            --> the latest angular js
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        addPost.jade
        deletePost.jade
        editPost.jade
        indexPost.jade
        readPost.jade

## Contributors

Murtaza Alvi : http://github.com/AlviMurtaza

Bassam Ismail : http://github.com/skippednote
