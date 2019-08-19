require('dotenv').config()
const fetch = require('node-fetch')

class DarkSky {
  forecast(lat, long) {
    fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long}?exclude=minutely,alerts,flags`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      return this._processed(response)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  _processed(response) {
    return {
      timezone: response.timezone,
      currently: this._currently(response.currently),
      hourly: this._hourly(response.hourly),
      daily: this._daily(response.daily)
    }
  }

  _currently(response) {
    return {
      summary: response.summary,
      icon: response.icon,
      precipIntensity: response.precipIntensity,
      precipProbability: response.precipProbability,
      precipType: response.precipType,
      temperature: response.temperature,
      humidity: response.humidity,
      pressure: response.pressure,
      windSpeed: response.windSpeed,
      windGust: response.windGust,
      windBearing: response.windBearing,
      cloudCover: response.cloudCover,
      visibility: response.visibility
    }
  }

  _hourly(response) {
    let hourlies = {
      summary: response.summary,
      icon: response.icon,
      data: []
    }
    response.data.forEach(function(forecast) {
      hourlies.data.push(
        {
          time: forecast.time,
          summary: forecast.summary,
          icon: forecast.icon,
          precipIntensity: forecast.precipIntensity,
          precipProbability: forecast.precipProbability,
          precipType: forecast.precipType,
          temperature: forecast.temperature,
          humidity: forecast.humidity,
          pressure: forecast.pressure,
          windSpeed: forecast.windSpeed,
          windGust: forecast.windGust,
          windBearing: forecast.windBearing,
          cloudCover: forecast.cloudCover,
          visibility: forecast.visibility
        }
      )
    })
    return hourlies
  }

  _daily(response) {
    let dailies = {
      summary: response.summary,
      icon: response.icon,
      data: []
    }
    response.data.forEach(function(forecast) {
      dailies.data.push(
        {
          time: forecast.time,
          summary: forecast.summary,
          icon: forecast.icon,
          sunriseTime: forecast.sunriseTime,
          sunsetTime: forecast.sunsetTime,
          precipIntensity: forecast.precipIntensity,
          precipIntensityMax: forecast.precipIntensityMax,
          precipIntensityMaxTime: forecast.precipIntensityMaxTime,
          precipProbability: forecast.precipProbability,
          precipType: forecast.precipType,
          temperatureHigh: forecast.temperatureHigh,
          temperatureLow: forecast.temperatureLow,
          humidity: forecast.humidity,
          pressure: forecast.pressure,
          windSpeed: forecast.windSpeed,
          windGust: forecast.windGust,
          cloudCover: forecast.cloudCover,
          visibility: forecast.visibility,
          temperatureMin: forecast.temperatureMin,
          temperatureMax: forecast.temperatureMax
        }
      )
    })
    return dailies
  }
}
