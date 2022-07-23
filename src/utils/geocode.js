const request = require('postman-request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1pdGt1bWFyMTg1OTYiLCJhIjoiY2w1ZzR6OGt2MHhuZTNvcjM1bHJ1YmFvYiJ9.Swb8JX3TWpzOBeY7I_O0Dg'

    request({url, json : true}, (error, {body}) => {
        if (error){
            callback('unable to connect to location services', undefined)
        }else if (body.features.length == 0){
            callback('unable to find location. Try another search', undefined)
        }else {
            callback(undefined, {
                lattitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode