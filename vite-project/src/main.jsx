import React from 'react'; 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//     target: '_blank',
//     href: "https://www.google.com"
//   },
//   children: "Please visit google.com"
// };


//variable

// const value=(
//   <a href='https://www.google.com' id='google'>Click Here</a>
// )


//function

// function MyApp() {
//   return(
//     <h1>This is the function</h1>
//   )
 
// }

//with createlement
// const createElements=React.createElement(
//   'a',
//   {
//     href:'https://www.google.com',
//     target:'_blank'
//   },
//   'click here'

// )

createRoot(document.getElementById('root')).render(
  // createElements

  // MyApp()
  // <MyApp/>


  <App/>

  // value

  // reactElement

)
