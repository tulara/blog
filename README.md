## Tulara's crochet blog :)

### TO RUN LOCALLY  

Open chrome via command line with following arguments to avoid cross origin errors on your local file system
  
1. `npm install` 
2. `npm start`
3. `open -a 'Google Chrome' --args -allow-file-access-from-files` and go to localhost:8080

### DEPLOYMENT

1. `heroku login`
2. `git push heroku master`
4. `heroku open`

### TO DO
- full page responsive ORIGINAL hero image
- tiled projects display
- module css post components?
- angular module per hobby?
- header that backs off as scroll down on sub pages (a la realestate.com.au) or content that appears to slide up over image
- css reset
- sass
- mixin for background cover, clearfix
- recent blog posts
- require.js?
- time zone on timestamps? ryan's book.
- bower generate front end packages then grunt to get them into relevant files
