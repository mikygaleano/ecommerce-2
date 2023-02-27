import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header (props) {

    const { image, lista } = props;

    

    return (
        <header >

            <Link to='home'><img src={image} alt="logo" /></Link>
            <nav>
                <ul>
                {
                    lista.map(e => {
                        return <li key={e.id}>
                            <Link to={e.name} className={styles.linkrouter}>{e.name} </Link></li>
                    })
                    }
                </ul>
                <span></span>
                <span></span>
                <span></span>
            </nav>
        </header>
    )
}