# Todo

This repo is undergoing a complete makeover to pivot in the direction of essay writing as the main form of content.
Podcasts will still be accessible from the site, however, the main purpose of the site will be as a platform for
collecting, organizing, and refining essays. As the rehaul is in early stages of development the following are
the primary tasks that need to be worked on before the site will be able to replace the old (as of writing this
current) site. This list itself is a WIP.

- [x] Convert the project to react.
- [x] Be able to render an essay from a 'post' object.
  - [x] Render the basic essay metadata and content.
  - [x] Render a sidebar with links to headings.
- [ ] Create a moderately robust post editor that supports markdown or something else equally simple.
  - [x] Post editor can edit the main content (nothing is actually savable until the backend setup)
  - [ ] Post editor can edit the meta data.
- [ ] Create a search page for the essays.
  - [x] Render search listings.
  - [ ] Be able to search based on title, tags, or author.
- [ ] Recreate the podcast listing from the previous site.
- [ ] Create a mobile friendly nav bar and revamp site navigation itself.
- [ ] Improve the theme (color pallet is basic mui rn)
- [ ] Create login integration with basic permission safe guards
- [ ] Create a backend api to handle loading post data and mutating post data.
- [ ] Integrate the frontend to actually utilize the backend (upgrade from mock data).
