import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App chai</h1>
        </div>
    )
}
 const ReactElement = {
    type: 'a' ,
    props: {
        href: 'https://google.com' ,
        target:'_blank'
    },
    children: 'Click me to visit google'

 }
//  const anotherElement= (
//     <a href="https://google.com" target='_blank'>visit google</a>
//  )
const reactElement = React.createElement(
    'a' ,
    {href:'https://google.com' , target: '_blank'} ,
    'click me to visit google'
)
 ReactDom.createRoot(document.getElementById('root')).render(
        <App/>
 )