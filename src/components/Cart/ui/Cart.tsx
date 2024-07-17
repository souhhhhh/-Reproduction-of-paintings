import { Link } from 'react-router-dom'
import {Logo, Size } from '../../../Shared/Logo/ui/Logo'
import styles from './Cart.module.scss'
import { useAppSelector } from '../../../redux/hooks'
import { CartItemsObj } from '../../Reproduction/models/type'
import { PaintingBasket } from '../../PaintingBasket'
export const Cart = () => { 

    const cartPictures = useAppSelector((state) => state.cartSlice.cartPictures)

    const totalPrice = useAppSelector((state) => state.cartSlice.totalPrice)

    return (
        <>
        <div className={styles.cart}>

            <Link to='/'>

            <Logo size={Size.WMARGIN}/>

            </Link>
                <h1>{totalPrice}</h1>
        </div>

        
        <div>

            
            {cartPictures.map((picture: CartItemsObj) =>(
                <PaintingBasket {...picture} key={picture.id + picture.name}/>
            ))}

        </div>
        </>
    )
}