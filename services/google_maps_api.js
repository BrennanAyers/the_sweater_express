require('dotenv').config()
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: Promise
})

googleMapsClient.geocode({address: 'denver, co'})
  .asPromise()
  .then((response) => {
    console.log(response.json.results)
  })
  .catch((err) => {
    console.log(err)
  })
