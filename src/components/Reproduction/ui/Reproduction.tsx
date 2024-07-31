import { FC, useEffect, useState} from 'react'
import styles from './Reproduction.module.scss'
import { CartItem } from '../../CartItem';
// import axios from 'axios'
import { CartItemsObj } from '../models/type';
import { Skeleton } from '../../../Skeleton/ui/Skeleton'
import { useGetPictureCountryQuery } from '../../../redux/api/api'

export const Reproduction:FC = () => { 

    const [activeButton, setActiveButton] = useState(0)
    //добавление класс active
    const [country,setCountry] = useState(0)
    //изминение страны
    const [pictures, setPictures] = useState<CartItemsObj[]>([]);
    //получени картин
    // const [isLoading, setIsLoading] = useState(true)

    const categories = ['Франция', "Германия", "Англия"]

    const { data,isLoading } = useGetPictureCountryQuery(country)


    
    useEffect(() => {

        const fetchData = async () => {
            const result = await data 
            setPictures(result);
        };
        fetchData(); 

    }, [country, data]);
    


    const hadnleClick = (i: number) => { 
        setActiveButton(i)
        setCountry(i)
    }

    return ( 
        <div className='container' >
            <div className={styles.reprodaction}>

                <p className={styles.reprodactionText}>Репродукции</p>

                <div className={styles.text} >
                        {categories.map((value,i) => ( 
                            <button 
                            onClick={() => hadnleClick(i)}
                            className={activeButton == i ? styles.active : ''}
                            key={i}>
                                {value}
                            </button>
                        ))}
                </div>
            </div>
            { isLoading ? 
                Array.from({ length: 6 }).map((_, index: number) => <Skeleton key={index} />)    
                        :
                    <CartItem pictures={pictures}/>
            }
        </div>
    )
}


