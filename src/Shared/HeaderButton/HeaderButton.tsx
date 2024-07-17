import { FC, ReactNode } from "react";


interface HeaderButtonProps { 
    moving: number,
    children: ReactNode,
    disabled?: boolean
}


export const HeaderButton:FC<HeaderButtonProps> = ( {moving, children, disabled } ) => { 
    
    
    const  scrollToHandler = () => { 
    
        window.scrollTo({ 
            top: moving ,
            behavior: "smooth"
        })
        
    }
    
    return ( 
        <button disabled={disabled} onClick={scrollToHandler}>{children}</button>
    )
};