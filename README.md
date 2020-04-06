## Videodock Test

---

- This web-application has been made using CRA a.k.a create-react-app. For styling styled-components have been used being a great way to scope styling to components in stead of having big sheets of css styling with classes and id's.
- As `yarn` has been used as the node package manager for this project you can only serve the project by first downloading `serve` as global dependency.

  - `yarn global add serve`.
  - Run `yarn` or `yarn install` to fetch all the dependencies.
  - In case you want to run a production build and serve it - run the following: `yarn build && serve -s build`. `-s` meaning that all not found requests would be rewritten to `index.html`.
  - In case you want to run the project in a development environment - just run: `yarn dev`.
  - All the global styles are included in `styles/globalStyle.js` and the media queries in `styles/media.js`.
  - The application is a one pager meaning that everything is now rendered in `App.js`
  - The components can be found under `src/components`
  - In case you want to create a new component follow this folder structure:

    navbar - styles.js (CSS) - navbar.jsx (COMPONENT) - index.js (Export index file so to be able to import from the components folder like:
    `import {Navbar, Footer} from '../../components'`)
