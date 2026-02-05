import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Onequestion from './components/Onequestion'
import Secondquestion from './components/Secondquestion'
import Thirdquestion from './components/Thirdquestion'
import Fourquestion from './components/Fourquestion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Onequestion/> */}
  {/* <Secondquestion/>  */}
  {/* <Thirdquestion/>
   */}
   <Fourquestion/>
  </StrictMode>,
)
