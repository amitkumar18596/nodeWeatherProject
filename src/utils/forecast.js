const request = require('postman-request')

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d18a7e2b91a8ff4b2e0e32f6ad72963&%20query='+ lattitude + ',' + longitude

    request({url, json : true}, (error, {body}) => {
        if (error){
            callback('unable to connect to location services', undefined)
        }else if (body.error){
            callback('unable to find location. Try another search', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' degrees out, and it feels like ' + body.current.feelslike + ' degrees')
        }
    })
}

module.exports = forecast