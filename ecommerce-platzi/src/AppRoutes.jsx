import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import Cards from './componentes/Header/Cards/Cards'

function AppRoutes() {
  const [lista, setLista] = useState([]);

    let array = [];
    useEffect(() => {
        async function fetchDataCard() {
        const result = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=0');
        const data = await result.json()
        console.log(data)
        data.map( e => {
            array.push(
                {
    
                    name: e.title,
                    image: e.images[0],
                    price: e.price
                }
            )
        })
        console.log(array)
        setLista(array)
        
    }
    fetchDataCard()
    }, []);

  return (
    <Routes >
      <Route path='cards' element={<Cards card={lista}/>} />
    </Routes>
  )
}

export default AppRoutes
