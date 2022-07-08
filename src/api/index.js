import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (ne, sw) => {
    try {
        const { data : { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'f13367fc59msh6a41e901b6e78ebp1e71f1jsn57131b972772',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      });
        return data;
    } catch (error) {
        console.log(error)
    }
}