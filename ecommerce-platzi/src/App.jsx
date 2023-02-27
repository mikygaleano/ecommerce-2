import {BrowserRouter} from 'react-router-dom'
import React, { useEffect ,useState  } from 'react';
import Header from './componentes/Header/Header'
import AppRoutes from './AppRoutes'

export default function App () {
    const [lista, setLista] = useState([]);

    let array = [];
    useEffect(() => {
        async function fetchData() {
        const result = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await result.json()
        data.map( e => {
            array.push(
                {
                    id : e.id,
                    name: e.name
                }
            )
        })
        const array2 = array.filter(e => {
            
            return e.name != 'New Category' && e.name != 'un nuevo nombre' && e.name != 'Nueva categoria'
                    && e.name != 'Prueba' && e.name != 'Amiguito' && !e[4]; 
            
        })
        
        setLista(array2)
        console.log(array2)
        
    }
    fetchData()
    }, []);
    

    return (
        <BrowserRouter>
            <Header  lista={lista} image='./iconos/logoEcommerce.png'/>
            <AppRoutes/>
        </BrowserRouter>
    )
}