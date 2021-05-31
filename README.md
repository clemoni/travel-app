# Travel App

**Capstone Udacity Front End Web Developer Nanodegree Program**

## Usage

Enter a city and a date of leaving to plane your trip. Return the weather of teh destination and if any some pictures from the palce you wish to visit.

## How to run the project

1 - Create an `.env` file in the `config` folder. In the `.env` file you should add the
the API_KEY:

- API_GEO
- API_WEATHER
- API_PIXA

2 - To run project in mode development: Start express server with `npm run start` and `npm run bdev`

3 - To run the project in mode production: Start express server with `npm run start` and `npm run build`

## Roadmap

The User should answer two field in the the form: a city and a date. For both the field a value is required and a error message is printed for each empty field.

The Date must be in date format 'yyyy-mm-dd' it should not previous to the current day (You can't travel to the past). If both this rule are not valid an error message would be printed.

When fetching the city with the thrid-party API Geonames, we limit the response to 3 cities if any. Because we consider the first choice is not always obvious we decided to add a clarification for cities that are homonym to one to another.

<img src="https://github.com/clemoni/travel-app/blob/main/src/public/img/clarify.jpg" alt="user clarification window" width="200" height="auto">

Thus an user would have to clarify if he/she wants to go to Paris (France), Paris (United Stated), or París (Mexico).

In the situation where there is only one choice of city, no clarification are asked and the result are directly displayed.
For example, any user that would like to go "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch" in Wales would directly access the result without clarification and breaking the css a little bit in the same occasion.

## Extend Options

An effort has bit put when displaying the weather, especialy with the main weather element.

The main weather element displays either the unique day if it's the current day or the first day of the forecast.

Is acting in the some way as header. Depending of the weather to this particular a background image would change to illustrate the weather description.

<img src="https://github.com/clemoni/travel-app/blob/main/src/public/img/main-1.jpg"  width="200" height="auto">
<img src="https://github.com/clemoni/travel-app/blob/main/src/public/img/main-2.jpg"  width="200" height="auto">
<img src="https://github.com/clemoni/travel-app/blob/main/src/public/img/main-3.jpg" width="200" height="auto">

Also when the forecast is displayed, the Day of the week is printed, with the day in format of the user and the icon associated with the weather.

<img src="https://github.com/clemoni/travel-app/blob/main/src/public/img/forecast.jpg" width="200" height="auto">

## Additional Details

This project is using two npm package that I created:

- [fp-dom-tool](https://github.com/clemoni/fp-dom-tool)
- [fp-dom-alert](https://github.com/clemoni/fp-dom-alert)

It is also using handlebars to render HTML.

This project has been build wiht the functional-programming in mind.

The code below is an example of one of its application:

```javascript
/**
 * Build Alert to list of Errors
 * Display element DOM _message
 * @param {function} fireDanger or FireSuccess
 * @param {Array} list of erros
 * @returns
 */
const fireList = (fire) => (errors) => {
  errors.forEach((err) => {
    fire(err);
  });
  _switchAlertDisplay();
};

/**
 * If error string convert to array
 * If array already return value
 * @param {string} string
 * @returns {array}
 */
const convertToList = (potentialString) => {
  return typeof potentialString === "string"
    ? [potentialString]
    : potentialString;
};

/**
 * Create alert danger with message as param
 * Get the _message div from the DOM
 * append alert to dom
 * display alert
 * @param {string} message
 */
export const fireDanger = (message) => {
  appendContainer(_alert._alertDanger(message));
};

/**
 * Partial Currying of FireList
 * Specifif to AlertDanger
 * see @fireList
 */
const fireListDanger = fireList(fireDanger);

/**
 * Chaining
 * fireDangerSL(errors)
 * Given error array or string
 * convert to array
 * Build alertDanger for each message error
 * see @convertToList
 * see @fireListDanger
 */
export const fireDangerSL = compose(fireListDanger, convertToList);
```

## Thanks

- [Jen Simmons for her design and inspiration](https://labs.jensimmons.com/2017/03-004.html)
- "JavaScript: The Definitive Guide", 7th Edition, by David Flanagan Published by O'Reilly Media, Inc., 2020
- Youtubers such as [DesignCourse](https://www.youtube.com/user/DesignCourse), [TraveryMedia](https://www.youtube.com/user/TechGuyWeb), [Leigh Halliday](https://www.youtube.com/watch?v=9Yrd4aZkse8&t=161s) and many others...
- All the community of Stack Overflow
