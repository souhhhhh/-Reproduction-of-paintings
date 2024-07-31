import styles from './Header.module.scss'
import cart from '../assets/Cart.svg'
import { FC} from 'react';
import { Size } from '../../../Shared/Logo/ui/Logo';
import {Logo} from '../../../Shared/Logo/index'
import { HeaderButton } from '../../../Shared/HeaderButton/HeaderButton';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
export const Header:FC = () => { 
    const { totalPictures } = useAppSelector((state) => state.cartSlice)


    return ( 

    <header className={styles.header} >

        <div className={styles.glav}>

                <Logo size={Size.WMARGIN}/>

            <div className={styles.nav}>
                <HeaderButton moving={650}>Репродукция</HeaderButton>
                <HeaderButton moving={2270}>Новости</HeaderButton>
                <HeaderButton moving={2920}>О нас</HeaderButton>
                
                <div className={styles.cart}>

                <Link to='cart'>
                    <img src={cart} alt="" className={styles.img}/>
                </Link>       
                    <h1>{totalPictures}</h1>

                </div>
            </div>

         </div>

    </header>
    )
};


