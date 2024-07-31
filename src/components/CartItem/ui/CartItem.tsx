import { FC } from "react"
import styles from './CartItem.module.scss'
import { Button, ButtonSize } from "../../../Shared/Button/ui/Button";
import { CartItemProps } from "../models/CartItem";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/cartSlice";
import { CartItemsObj } from "../../Reproduction/models/type";

export const CartItem:FC<CartItemProps> = ({pictures}) => { 
    
    const dispatch = useAppDispatch()

    const onClickToBasket = (picture: CartItemsObj) => { 
        dispatch(addToCart(picture)) 
    }
    

    return ( 
        <div className="container">
            <div className={styles.cart}>
                
                {pictures?.map(picture => (

                    <div className={styles.all} key={picture.id}>
                        <img className={styles.picture} src={picture.img} alt="" />
                        <div className={styles.text}>
                            <p>{picture.author}</p>
                            <h1>{picture.name}</h1>
                            <h2>{picture.textile}, {picture.materials} ({picture.size})</h2>
                            <h3>{picture.price} руб</h3>
                        </div>
                        
                        <Button onClick={() => onClickToBasket(picture)} size={ButtonSize.LONG}>В корзину</Button>
                    </div>
                ))}
            </div>
            </div>
        )
    
}
