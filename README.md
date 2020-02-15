# Star Wars Planets API Demo

## About This Project

This project uses React and the Star API to demonstrate pulling data from that API and populating components and routes based on the returned data.

### Requirements

- Home screen displaying the first page of results from the API in some kind of table
- Planet info contains name, climate and population
- Planet info has details option to display more stats
- Url links to an individual page displaying only the info for that planet
- Responsive design
- 100% test coverage
- Well documented

### Tech used

- codesandbox https://codesandbox.io/s/github/rewfergu/planet-api
- create react app
- reach router
- emotion
- jest
- react testing library

## View the Live Demo

To view the project online, visit the codesandbox link: https://codesandbox.io/s/github/rewfergu/planet-api

## To Run Locally

You can run the project locally by taking the following steps

1. Clone or download the repo from GitHub (https://github.com/rewfergu/planet-api)
2. When the project has downloaded, install the dependencies by running `npm install`
3. A local server will be created, and a web browser may open automatically depending on your setup, if it doesn't open a browser and navigate to `localhost:3000`

## To Run the Tests

1. From the command line run `npm run test`
2. This will run the unit tests and display an overview coverage report
3. To view a detailed report of the test coverage, use a browser to open the `index.html` file inside the auto generated `coverage/lcov-report` folder.

## Future Improvements

### UI Components

The UI components could be improved more. The more time given the more polishing could be done. Since I didn't have a complete design at the start of the project, many changes and tweaks started to produce some unnecessary complexities as far as style reuse and composition goes.

### API abstraction

I'm making calls directly to the API in a couple of these components, and if I were to polish more I think abstracting those calls out would help some, especially when mocking the fetch calls in testing.

### SVG Graphics

I added some SVG representations of the planets to add some visual interest. At the moment their color comes from a set of colors based on words in the terrain field for that planet, and the size is random. I had originally intended to match the size of the planet graphic with the diameter field coming from the API, but ran out of time.

### More visuals

SVG was the only thing I added, but if I had time I would have liked to add more. I inteded to add a loading spinner while React is waiting for the API data. The residents and films fields would benefit from this, since they are the only two fields that make additional requests inside the Planet component. I also would add React Spring to the opening of the details data. To snap it open is a little jarring.
