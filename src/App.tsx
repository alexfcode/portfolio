import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Slogan } from './layout/slogan/Slogan';
import { Footer } from './layout/footer/Footer';
import { Particle } from "./components/Particle/Particle"


function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contacts />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;