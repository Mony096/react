import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carlender from './compnent/page/carlender'
import DashBoard from './compnent/page/dashBoard'
import Enrollman from './compnent/page/enrollman'
import PtoLibaility from './compnent/page/ptoLibaility'
import TimeConver from './compnent/page/timeConvert'
import TimeUse from './compnent/page/timeUse'
import SildeBar from './compnent/sildeBar'
function App() {
  return (
    <BrowserRouter>
      <SildeBar>
        <Routes>
          <Route path='/' element={<DashBoard />}></Route>
          <Route path='/carlender' element={<Carlender />}></Route>
          <Route path='/enrollman' element={<Enrollman/>}></Route>
          <Route path='/ptoLibaility' element={<PtoLibaility />}></Route>
          <Route path='/timeConvert' element={<TimeConver/>}></Route>
          <Route path='/timeUse' element={<TimeUse/>}></Route>
        </Routes>
      </SildeBar>
    </BrowserRouter>
  )
}

export default App