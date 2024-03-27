## Jammable

### Design

With the underlying foundations similar to the figma designs, I made a few new decisions.

- I decided to go with a card style layout similar to Netflix, Prime, YT etc with a navbar and a footer on mobile.
- I decided to go with footer icons with titles, for navigation on mobile.
- On the cards, I added a footer bar with the title and 3 icons to indicate user count, likes and share counts; similar to an instagram card.
- I switched up the logo as I felt the one with the mic wasn't clean.
- I highlighted the trending voices by making them larger, more stylish and in a carousel with navigation dots.
- I also added theme toggling and search functionality through an iOS drawer like system.
- Added tooltips to icons where applicable.
- I went with a theme of pink, purple, black and white as the primary colors, with crisp 15x15 icons.

### Data

- I created a vercel blob storgae bucket to host the images I used in the app.
- Api calls made directly on the server so almost not latency.
- I went with react server components(RSC) to generate a fast and cleaner build without need for 3rd party libraries.
- I added rxjs and redux-observable to the codebase in-case there was a need to handle heavy data streaming and events in the future.
