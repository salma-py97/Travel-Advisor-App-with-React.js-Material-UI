import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// call
export const getPlacesData = async (sw, ne) => {
  try {
   // request

   // normal
   // const res = await axios.get(URL, options);
   // return res.data.data
   
   // destructuring :
    const {data: {data}} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': '9e3346ed78msh0ea3109444e0174p18bac7jsn81aeb7373c55',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data

  } catch (error) {
    console.log(error)
  }
}

// function call in app.js