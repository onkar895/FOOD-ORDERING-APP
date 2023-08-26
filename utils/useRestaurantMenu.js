import { useEffect, useState } from 'react'
import { SWIGGY_MENU_API } from '../utils/Constants';

// Now here we have the resId and it has to fetch the data and return the restInfo back to where that hook is being called from.  So, we are taking the resId and returning the resInfo.
const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null)
  
  useEffect(() => {
    fetchMenu();   // call fetchMenu function so it will fetch api data and set data in restaurant state variable
  }, []);  

  // fetchData
  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_API + resId);
      const json = await data.json();
      // console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };
  return resInfo
}

export default useRestaurantMenu
