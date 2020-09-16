# The Hard Times

## Description
The all-in-one resource organizer for students and researchers. Here the user can take look up articles and take notes on them while being able to save it all in one place. No more copying down URLs, just bookmark the page and the notes will be saved with them.

### motivation
As a student, developer or researcher, I want to have an all-in-one resource manager so that I can stay organized, keep track of helpful articles, and keep track of the notes I took. 

<!-- ### Results -->

<!-- ## User-Stories -->

## Breakdown of Tasks

General Front-End:
 - Gio: About Page, Routes for this page. Design
 - Maverick: Full-Stack, 

Back-End
 - Chloe: routes, News API
 - Christoper: Sequelize, font+back interaction, Design


## Idea to MVP
MVP-Uno: Bring in articles from News API and show the in the front page. User can also select articles based on search, most popular, certain indutry. Once article is picked, allow user to take notes while reading. Save notes to SQL. Make everything load when it refreshes.

## Technologies Used
 - News API
 - Jquery
 - Node.js
 - Express.js & handlebars
 - three.js
 - Sequelize ORM
 - CSS imports for fonts

## Installation

 - npm install newsapi

# projectDos

# Database

Sequelize is used throughout this project. While it is not needed, the sequelize cli is very useful for setting up your local development environment:

```bash
npm i -g sequelize-cli
sequelize db:create
```

Sequelize is configured to run from the `config/config.js` which needs the following environment variables set:

```
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```
