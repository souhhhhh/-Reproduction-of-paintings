import { FC } from "react"
import { CartItemsObj } from "../../Reproduction/models/type"
import styles from './PaintingBasket.module.scss'
import minusButton from '../assets/Minus.png'
import plusButton from '../assets/Plus.png'
import { useAppDispatch } from "../../redux/hooks"
import { minusPicture, plusPicture, removeItem } from "../../redux/slices/cartSlice"
export const PaintingBasket:FC<CartItemsObj> = ({name, price, img, count, id}) => { 
    
    
    const dispatch = useAppDispatch()

    const totalPrice = count * price
    

    const onButtonClick = () => { 
        dispatch(plusPicture(id))
    }

    const onButtonMinus = () => { 
        count > 1 ? dispatch(minusPicture(id)) : dispatch(removeItem(id))
    }

    return (
        <div className="container">
            <div className={styles.PaintingBasket}>
                <div className={styles.cart}>

                <div className={styles.imgText}>
                    <div>
                        <img src={img} alt="" width={65}  />
                    </div>

                    <div className={styles.name}>
                        <h1>{name}</h1>
                        <h2>{price} руб</h2>
                    </div>
                </div>


                <div className={styles.count}>

                        <button onClick={onButtonMinus}>
                        <img src={minusButton} alt="" />
                        </button>
                        
                            <h1>{count}</h1>

                        <button onClick={onButtonClick}>
                        <img src={plusButton} alt="" />
                        </button>


                        <h2>{totalPrice}</h2> 
                </div>

                </div>
            </div>
        </div>
    )
}