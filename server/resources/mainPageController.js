const MainPage = require('./mainPage');

module.exports = {
  loadPage (req, res) {

    MainPage.find({})
    .then(main => {
      // console.log(main)
      res.json(main);
    })
    .catch(err => {
      res.status(404).send('Could not load main page', err);
    })
  },
  
}