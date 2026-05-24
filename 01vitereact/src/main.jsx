import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "RS45"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
  //   <App /> 
    
  // </StrictMode>,
  reactElement
  
)
