import { Link } from 'react-router-dom';
import Logo, { Size } from '../../Shared/Logo/Logo';
import styles from './Footer.module.scss'
import { FC } from 'react';
export const Footer:FC = () => { 
    return ( 
        <footer >
                <div className={styles.footer}>

                    <div className={styles.logo}>

                    <Logo size={Size.NMARGIN} disabled/>
                    <p>+7 (999) 543-54-54</p>
                    <h1>Мастерская</h1>

                    </div>

                    <div className={styles.text}>
                    
                    <div className={styles.reproduction}>
                        <p>Репродукции</p>
                        <h1>Франция</h1>
                        <h1>Германия</h1>
                        <h1>Англия</h1>
                    </div>

                    <div className={styles.news}>
                        <p>Новинки</p>
                        <h1>2021</h1>
                        <h1>2020</h1>
                    </div>

                    <div className={styles.about}>
                        <p>О нас</p>
                        <h1>Художники</h1> 
                        <h1>Менеджеры</h1> 
                    </div>

                    <div className={styles.contacts}>
                        <Link to='https://t.me/souhhhh' target='blanck'>
                            <p>telegram: souhhhhh</p>
                        </Link>
                    </div>
                    </div>

                </div>
        </footer>
    )
}