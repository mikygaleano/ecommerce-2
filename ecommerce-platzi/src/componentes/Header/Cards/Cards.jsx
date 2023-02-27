import { Link } from "react-router-dom";
import styles from './Cards.module.css'

export default function Cards (props) {

    const {card} = props;

    return (
        <section className={styles.sectionCards}>
            <div className={styles.conteinerCards}>
                {
                    card.map(e => {
                        return <div className={styles.cards}>
                                    
                                    <Link><img src={e.image} alt={e.name} /></Link>
                                    
                                    <div>
                                        <h3>{e.name}</h3>
                                        <span>{'$ ' + e.price}</span>
                                    </div>
                               </div>  
                    })
                }
            </div>
        </section>
    )
}