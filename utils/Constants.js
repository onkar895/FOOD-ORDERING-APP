// Image CDN URL for Restaurant card
export const SWIGGY_CDN_LINK = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

// Swiggy API to get Restaurant data with corsproxy
export const SWIGGY_API_URL =
'https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

// export const SWIGGY_API_URL_CORS = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

export const SWIGGY_MENU_API = 'https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId='

// export const SWIGGY_MENU_API_CORS = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=')

export const SWIGGY_MENU_IMG_API = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'

export const FAQ = [
  {
    id: 1,
    title: 'What is Swiggy Customer Care Number?',
    description: 'We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.'
  },
  {
    id: 2,
    title: 'I want to explore career opportunities with Swiggy',
    description: 'https://www.swiggy.com/careers?hide_header=ios_android'
  },
  {
    id: 3,
    title: 'Can I edit my order?',
    description: 'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents.'
  },
  {
    id: 4,
    title: 'I want to cancel my order',
    description: 'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.'
  },
  {
    id: 5,
    title: 'Will Swiggy be accountable for quality/quantity?',
    description: "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."
  },
  {
    id: 6,
    title: 'Is there a minimum order value?',
    description: 'We have no minimum order value and you can order for any amount.'
  },
  {
    id: 7,
    title: 'Do you charge for delivery?',
    description: 'Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the Review Order page.'
  },
  {
    id: 8,
    title: 'How long do you take to deliver?',
    description: 'Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.'
  },
  {
    id: 9,
    title: 'What are your delivery hours?',
    description: 'Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.'
  },
  {
    id: 10,
    title: 'Can I order from any location?',
    description: 'We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.'
  },
  {
    id: 11,
    title: 'Is single order from many restaurants possible?',
    description: 'We currently do not support this functionality. However, you can place orders for individual items from different restaurants.'
  },
  {
    id: 12,
    title: 'Do you support bulk orders?',
    description: 'In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.'
  },
  {
    id: 13,
    title: 'Can I order in advance?',
    description: 'We currently do not support this functionality. All our orders are placed and executed on-demand.'
  },
  {
    id: 14,
    title: 'Can I change the address / number?',
    description: 'Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.'
  },
  {
    id: 15,
    title: 'Did not receive referral coupon?',
    description: 'Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@swiggy.in. We will contact you within 48 hours.'
  },
  {
    id: 16,
    title: 'Deactivate my account',
    description: 'Please write to us at support@swiggy.in in the event that you want to deactivate your account.'
  }

]
