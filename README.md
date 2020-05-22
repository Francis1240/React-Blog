# Blog Demo

This is a personal full-stack website project, intended to create a demo for a blog website, with database support.

* Front-end: [React.js](https://reactjs.org/)
* Back-end: [JavaScript](https://www.javascript.com/)
* Database: [MongoDB](https://www.mongodb.com/)


## Installation

Use the package manager [npm](https://npmjs.com) to install the necessary packages.

```bash
cd frontend/
npm install
cd ../backend/
npm install
```

## Start the MongoDB database

First install the community version of [MongoDB](https://docs.mongodb.com/manual/installation/). Follow the instructions and start the service.
```bash
brew services start mongodb-community@4.2
```
After the service started, insert some place-holder articles to the database <b><i>article</i></b>. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)