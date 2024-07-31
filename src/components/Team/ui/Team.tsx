import img from '../assets/Window.png';
import styles from './Team.module.scss';
import profile from '../assets/profile.jpg'
import { FC } from 'react';
export const Team:FC = () => { 
    return ( 
        <div className="container">
            <div className={styles.team}>
                <img src={img} alt="" className={styles.img}/>

                <div className={styles.text}>
                <p>Наша команда</p>
                <h1>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</h1>
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                </div>
        
            </div>
        </div>
    )
}