import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonSize { 
    LONG = 'long',
    SHORT = 'short'
}

// eslint-disable-next-line react-refresh/only-export-components
export enum Familiarize { 
    FAMILIARIZE = 'familiarize'
}


interface ButtonProps { 
    size: ButtonSize | Familiarize,
    children: ReactNode,
    className?: string,
    onClick: () => void,
}



    export const Button:FC<ButtonProps> = ({size, children, ...props}) => { 

    return ( 
        <button {...props} className={classNames(styles.Button, {[styles[size]]: true})}>{children}</button>
    )
}