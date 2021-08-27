import {useState, useEffect} from 'react'

function useFech() {
    const [fetchData, setFechData ] = useState ([])
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/comments")
        .then(response =>   response.json())
        .then(ready => setFechData(ready))
        .catch(error => console.log(error))
     }, [])
     return [fetchData]
}

export { useFech } 
