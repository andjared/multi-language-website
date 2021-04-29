import { useState } from 'react';
import Button from './Button';
import imageModelovanje from '../images/modelovanje.jpg';
import imageProjektovanje from '../images/projektovanje.jpg';
import imageIzvodjenje from '../images/izvodjenje.jpg';


const Usluge = () => {
    // box-1 
    const text3DShort = `U okviru studija uz pomoć savremenih tehnologija se bavimo izradom visoko kvalitetnih 3D vizualizacija enterijera, eksterijera, kao i pojedinačnih elemenata (mobilijara, nameštaja i dr.).`;
    const text3DLong = `${text3DShort}
     3D modelovanje vršimo prema postojećim projektima, 2D crtežima, odnosno tehničkoj dokumentaciji. 
     Za jednostavnije projekte nudimo mogućnost da u saradnji sa klijentom, uz pomoć fotografija, skica i opisa zajedno definišemo njegovu zamisao na osnovu koje izradjujemo 3D vizualizacije.`;
    const [text3D, setText3D] = useState(text3DShort);
    //box-2
    const textPejzaznaShort = 'U okviru studija za pejzažno arhitektonsko projektovanje bavimo se oblikovanjem eksterijera. Naš pristup je umetničko-inženjerski što rezultira kreiranju jedinstvenih, funkcionalnih otvorenih prostora prema potrebama korisnika. ';
    const textPejzaznaLong = `${textPejzaznaShort}
    Pejzažno-arhitektonski plan predstavlja 2D crtež-kompozicioni plan sa prikazanim kompletnim rešenjem oblikovanja otvorenog prostora.
    To uključuje rešenje pozicija, formi, materijala: staza, platoa, bazena, fontana, pergola, mobilijara i svih drugih pratećih elemenata. Na planu je prikazan plan zelenila prema opštim kategorijama (listopadno/ zimzeleno drveće, žbunje, perene, pokrivači tla, puzavice, travnjak i dr.).`
    const [textPejzazna, setTextPejzazna] = useState(textPejzaznaShort);
    //box-3 
    const textIzvodjenjeShort = 'Izvođenje radova podrazumeva realizaciju idejnih projekata na terenu.';
    const textIzvodjenjeLong = `${textIzvodjenjeShort}
    Usluge izvođenja na poslovima ozelenjavanja su deo naše ponude i one obuhvataju: pripremne radove, ozelenjavanje, ugradnju PA elemenata, osvetljenja, žardinjera i mobilijara, ugradnju travnog tepiha.`;
    const [textIzvodjenje, setTextIzvodjenje] = useState(textIzvodjenjeShort);

    // onclick functions
    const handle3D = () => {

        setText3D(text3D === text3DShort ? text3DLong : text3DShort);
        console.log(text3DShort);
    };
    const handlePejzazna = () => {
        setTextPejzazna(textPejzazna === textPejzaznaShort ? textPejzaznaLong : textPejzaznaShort);
    };
    const handleIzvodjenje = (e) => {
        setTextIzvodjenje(textIzvodjenje === textIzvodjenjeShort ? textIzvodjenjeLong : textIzvodjenjeShort);
    };

    return (
        <div className="usluge">
            <div className="box box-1">
                <div className="text-box">
                    <h2>3D modelovanje</h2>
                    <p>{text3D}</p>
                    <Button handleClick={handle3D} title={text3D === text3DShort ? "Procitaj vise" : "Manje"} />
                </div>
                <img src={imageModelovanje} alt="3D" />
            </div>
            <div className="box box-2">
                <img src={imageProjektovanje} alt="3D" />
                <div className="text-box">
                    <h2>Pejzazna arhitektura</h2>
                    <p>{textPejzazna}</p>
                    <Button handleClick={handlePejzazna} title={textPejzazna === textPejzaznaShort ? "Procitaj vise" : "Manje"} />
                </div>
            </div>
            <div className="box box-3">
                <div className="text-box">
                    <h2>Izvodjenje radova</h2>
                    <p>{textIzvodjenje}</p>
                    <Button handleClick={handleIzvodjenje} title={textIzvodjenje === textIzvodjenjeShort ? "Procitaj vise" : "Manje"} />
                </div>
                <img src={imageIzvodjenje} alt="3D" />
            </div>
        </div >
    );
};


export default Usluge;

// const handle3D = () => {
//     setText3D(text3DLong);
// };
// const handlePejzazna = () => {
//     setTextPejzazna(textPejzaznaLong);
// };
// const handleIzvodjenje = () => {
//     setTextIzvodjenje(textIzvodjenjeLong);
// };
// const handleOdrzavanje = () => {
//     setTextOdrzavanje(textOdrzavanjeLong);

// };
// const handleButton = () => {
//     setButtonText('Manje');
// };

// useEffect(() => {
//     console.log('3D changed');
// }, [text3D]);
