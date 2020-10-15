// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <div
    className={'box box--small'}
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className={'box box--medium'}
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className={'box box--large'}
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

// EC2
// const Box = ({className = '', children, style}) => {
//   return (
//     <div
//       className={`box ${className}`.trim()} // NOTE the = '' default, and then
//       // the trim here, is to avoid undefined, and then the whitespace, if the 
//       // className prop is not provided
//       style={{fontStyle: 'italic', ...style}}
//     >
//       {children}
//     </div>
//   )
// }
const Box = ({size = 'small', children, style}) => {
  return (
    <div
      className={`box box--${size}`} // NOTE my approach here was bad, because
      //if nothing is passed to size, you are left with a wrid 'box--' class
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {/* EC2 */}
      {/* <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box>
        sizeless colorless box
      </Box> */}
      <Box size="small" style={{backgroundColor: 'lightyellow'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'lightyellow'}}>
        small lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: 'lightyellow'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
