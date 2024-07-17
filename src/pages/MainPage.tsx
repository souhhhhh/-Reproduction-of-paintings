import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main/ui/Main";
import { NewItem } from "../NewItems";
import { Reproduction } from "../Reproduction";
import { Team } from "../Team";

export const MainPage = () => { 
    return ( 
        <div>
        <Header />
        <Main />
        <Reproduction />
        <NewItem />
        <Team />
        <Footer />
        </div>
    )
};
