const db = require('../../db');
const MainPage = require('../resources/mainPage');

const data = [
  {
    viewCount: 323,
    houseName: "Airstream Vintage Adventure",
    houseType: "CAMPER/RV",
    location: 'Malibu',
    guests: 4,
    beds: 3,
    bedrooms: 2,
    baths: 1,
    highlight: {
      title: ["Great check-in experience", "Great location", "Self check-in"],
      detail: [
        "95% of recent guests gave this home’s check-in process a 5-star rating.",
        "90% of recent guests gave this home’s location a 5-star rating.",
        "Easily check yourself in with the keypad."
      ]
    },
    body: ["A unique experience for the person who loves nature and vintage American icons. A little rustic, but vastly rewarding. Please read the entire listing and view an extensive photo library to determine if this satisfies your creature comfort quotient! Check out our Airbnb China lifestyle interview on YT video network: /watch?Pfnle8DXleU", "Featured here is a 1971 AIRSTREAM 28' 'SOVEREIGN OF THE ROAD' trailer. This INTERNATIONAL model was the Cadillac of trailers in it's day. Straight out of the 'MadMen' era, this silver slipper boasts sleeping for up to FOUR (4) PERSONS on ONE (1) DOUBLE and TWO (2) SINGLE BEDS.. All quality linens and towels are provided. The rear BATHROOM is equipped with a toilet, sink, and a small combination tub/ shower. The galley has a gas range-top, oven, refrigerator and double sink(URL HIDDEN)gas FURNACE provides comfort heating on chilly nights.", 'Swimming pool is available for guest use during summer months. Hiking trails on and off the property.'],
    isHelpful1: true,
  }
]

const seedDatabase = function() {
  MainPage.remove({})
  .then(MainPage.create(data))
  // .then(db.disconnect());
}

seedDatabase();