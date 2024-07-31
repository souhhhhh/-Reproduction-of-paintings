import { FC } from 'react';
import bird from '../assets/Bird.svg'
import styles from './Main.module.scss'
import { Button, ButtonSize } from '../../../Shared/Button/ui/Button';
export const Main:FC = () => { 
    return ( 
    <div className='container' id='main'>

        <div className={styles.glav}>

        <div>
            <img src={bird} alt="" width={540} height={621} />
        </div>

        <div className={styles.text}>
            <p className={styles.pText}>Реплики картин <br /> от <span className={styles.spanText}>Ink. House </span></p>

            <h1 className={styles.hText}>Высокое качество отрисовки на плотной бумаге или льняном <br /> холсте. Редкие произведения, доступные цены.</h1>
            
        
            <div>
                <Button size={ButtonSize.LONG}>Продукция</Button>
            </div>

        </div>
        
        </div >

    </div>
    )
};
