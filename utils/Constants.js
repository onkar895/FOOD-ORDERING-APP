// Image CDN URL for Restaurant card
export const SWIGGY_CDN_LINK = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

// Swiggy API to get Restaurant data with corsproxy
export const SWIGGY_API_URL =
'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
// 'https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING'

export const SWIGGY_MENU_API = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=')

export const SWIGGY_MENU_IMG_API = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'
