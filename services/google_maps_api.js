require('dotenv').config()

class GoogleMaps {
  constructor() {
    this.googleMapsClient = require('@google/maps').createClient({
      key: process.env.GOOGLE_API_KEY,
      Promise: Promise
    })
  }

  geocode(location) {
    this.googleMapsClient.geocode({address: location})
    .asPromise()
    .then((response) => {
      return this._processed(response.json.results)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  _processed(response) {
    let firstResult = response[0]
    return {
      lat: firstResult.geometry.location.lat,
      long: firstResult.geometry.location.lng,
      formatted_address: firstResult.formatted_address
    }
  }
}
