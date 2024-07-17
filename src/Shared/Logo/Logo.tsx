import { FC } from 'react'
import star from '../../Header/assets/Star.svg'
import styles from './Logo.module.scss'
import classNames from 'classnames'
import { HeaderButton } from '../HeaderButton/HeaderButton'


// eslint-disable-next-line react-refresh/only-export-components
export enum Size { 
    NMARGIN = 'nmargin',
    WMARGIN = 'wmargin'
}

interface sizeProps { 
    size: Size,
    disabled?: boolean
}

const Logo: FC<sizeProps> = ( {size, disabled} ) => { 

    return ( 
        <div >
                <div className={classNames(styles.img, {[styles[size]]: true })}>
                    <img src={star} alt="" />
                    <HeaderButton moving={0} disabled={disabled}>Ink. House</HeaderButton>
                </div>
        </div>
    )
}
export default Logo