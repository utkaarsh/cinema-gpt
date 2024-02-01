# Cinema GPT

## Movies recomandation with AI

![login](login.png)
(Homepage.png)
(searchResults.png)
![demo](demo.gif)

### How it works

We pass the user's query with a prompt describing what we want to `gpt-3.5-turbo` and get a valid array of movies as a response. Then we can just call The Movie Database API to get the movie details.

The more complicated way to build this would be to create word embeddings for the movie titles and descriptions, store those embeddings in some vector datastore, and then use cosine similarity (or some related algorithm) to find the most similar movies. GPT already has these embeddings since most of these movies are mentioned somewhere in the massive pretraining data, so it's a lot easier to just use that.

- Create `.env` file and put configure

```js
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_BE_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_BE_HERE;
REACT_APP_FIREBASE_API_KEY = YOUR_API_KEY_WILL_BE_HERE;
```

## Link

Live Demo : [Live Demo](https://cinema-gpt.web.app/ "Live Demo")

### Objectives Accomplished

create react app
configured tailwind css
routing of app
auth forms
firebase setup
deploying app to production
create signup user account in firebase
Implement Signin/Signup user API
Created a redux store with user Slice
secured login route
redirect to browse page only if authenticated
unsubscribed to OnAuthStateChaned callback
added hardcoded values to constant files
Registered on TMDB API and get access token
Get Data from TMDB Now playing movies API
Custom Hooks for Now Playing Movies
Create movie Slcie
Update STore with movie data
Planning for main container and secondary container
Fetch Data for trailer video
Update store with trailer video data
Embeded the youtube play video and make it autoplay and mute
Applied Tailwindcss to make it look so awesome
Building secondary component
dispaly movies list categorywise

```

```
