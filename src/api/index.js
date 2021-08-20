import axios from "axios"


// call
export const getPlacesData = async (type, sw, ne) => {
  try {
   // request

   // normal
   // const res = await axios.get(URL, options);
   // return res.data.data
   
   // destructuring :
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': '90cc9388abmsh616dd1ac8ab1221p171618jsn9bd3cd3cebb5',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data

  } catch (error) {
    console.log(error)
  }
}

// function call in app.js 

// weather
export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get(`https://community-open-weather-map.p.rapidapi.com/find`, {
      params: {lon: lng, lat: lat},
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '90cc9388abmsh616dd1ac8ab1221p171618jsn9bd3cd3cebb5'
      }
    })

    return data
    
  } catch (error) {
    console.log(error)
  }
}