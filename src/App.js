import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components/Charts'

import { Ecommerce, Orders, Calender, Employees, Staked,
  Prymird, Customers, Karbana, Area, Bar, Finacial,
        ColorMapping, ColorPicker, Editor, Line, Pie } from './pages/Charts'


import { useStateContext } from './contexts/ContexProvider'

function App() {

const { activeMenu } = useStateContext();
  


  return (
    <div className="App">
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type='button' className='text-5xl p-3 hover:drop-shodow-xl
               hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%'}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* implimate sider */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              
              <Sidebar/>

            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
            </div>
          )}
          {/* Navbar */}
          <div className={
            `dark:bg-main-bg bg-main-bg main-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                
                <Navbar />
              </div>
          </div>

        {/* Routes */}
            <Routes>
              {/* Dashbord */}
              <Route path='/' element={<Ecommerce /> } />
              <Route path='/ecommerce' element={<Ecommerce /> } />

              {/* pages */}
              <Route path='/orders' element={<Orders /> } />
              <Route path='/employees' element={<Employees /> } />
              <Route path='/customers' element={<Customers /> } />

              {/* Apps */}
              <Route path='/karbana' element={<Karbana /> } />
              <Route path='/editor' element={<Editor /> } />
              <Route path='/calender' element={<Calender /> } />
              <Route path='/color-picker' element={<ColorPicker /> } />

              {/* Charts */}
              <Route path='/line' element={<Line /> } />
              <Route path='/area' element={<Area /> } />
              <Route path='/bar' element={<Bar /> } />
              <Route path='/pie' element={<Pie /> } />
              <Route path='/finacial' element={<Finacial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/prymird' element={<Prymird />} />
              <Route path='/staked' element={<Staked />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
