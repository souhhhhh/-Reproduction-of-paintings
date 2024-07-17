import { Footer } from "../components/Footer/index";
import { Header } from "../components/Header";
import { Main } from "../components/Main/index";
import { NewItem } from "../components/NewItems";
import { Reproduction } from "../components/Reproduction";
import { Team } from "../components/Team";

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
