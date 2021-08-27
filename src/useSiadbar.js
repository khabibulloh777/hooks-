import { useState } from "react"


const useSiadbar  = () => {
    const [siadbarActive, setSiadbarActive] = useState(false)
    const openSiadbar = () => {
       setSiadbarActive(!siadbarActive)
    };  
    return [ siadbarActive, openSiadbar ]
};



export {useSiadbar }