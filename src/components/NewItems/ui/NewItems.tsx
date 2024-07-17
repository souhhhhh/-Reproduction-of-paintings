import styles from './NewItems.module.scss';
import star from '../assets/Star 2.svg'
import {Button, Familiarize} from '../../../Shared/Button/ui/Button';
import { FC } from 'react';
export const NewItem:FC= () => { 
    return ( 
        <div className={styles.newItem}>
            <div className='container'>
                <div className={styles.text}>
                    <img src={star} alt="" />
                    <p>Новая коллекция <br /> французских авторов</p>
                </div>

                    <h1>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</h1>
                    <h2>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</h2>
                    <Button size={Familiarize.FAMILIARIZE}>Ознакомиться</Button>
            </div>
        </div>
    )
};