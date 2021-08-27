import React  from 'react'
import Siadbar from './Siadbar'
import './Header.css'
import { useSiadbar } from './useSiadbar'
import { useFech } from './useFech'
function Header() {

     const [siadbarActive, openSiadbar] = useSiadbar();
     const [fetchData] = useFech();
      console.log(fetchData)
     return (
        <div className="header">
            <div className={siadbarActive ? "wrapper active" : "wrapper" }>
            <Siadbar/> 
            </div>
           <button onClick={openSiadbar}>Open Saidbar</button>
        </div>
    )
}

export default Header
