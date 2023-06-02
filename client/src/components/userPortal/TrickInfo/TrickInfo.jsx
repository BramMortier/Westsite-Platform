import { SectionLabel, Button } from "@components";
import { useParams } from "react-router-dom";
import { useTrickContext } from "@hooks/useTrickContext";
import "./trickInfo.scss";

const TrickInfo = () => {
    const { id } = useParams();
    const { tricks } = useTrickContext();

    const trick = tricks.find((trick) => trick._id == id);

    console.log(trick);

    return (
        <section className="trick-info">
            <div className="trick-info__action-buttons">
                <SectionLabel name="Trick Info" />
                <Button type="secondary" variant="square">
                    <img src="/icons/close-light.svg" alt="close icon" />
                </Button>
            </div>
            <div className="trick-info__thumbnail">
                <img src={`http://localhost:3000/api/files/${trick.thumbnail}`} alt="" />
                <ul className="trick-info__attributes">
                    <li className="trick-info__attribute">{trick.difficulty}</li>
                    <li className="trick-info__attribute">{trick.type}</li>
                    <li className="trick-info__attribute">{trick.variant}</li>
                </ul>
            </div>
            <div className="trick-info__stats">
                <div className="trick-info__stat">
                    <span>56%</span>
                    <p>Van de andere West Site leden kunnen deze trick</p>
                </div>
                <div className="trick-info__stat">
                    <span>96%</span>
                    <p>Van onze West Site trainers kunnen je hem voortonen!</p>
                </div>
            </div>
            <div className="trick-info__title">
                <h3>{trick.name}</h3>
                <Button type="secondary">Landed!</Button>
            </div>
            <div className="trick-info__content">
                <h4>Algemene Info</h4>
                <p>
                    Deze trick vormt de basis van enorm veel tricks in wakeboarden. Het is de eerste trick waarbij je je hendel zult moeten doorgeven.
                    Daarom is het belangrijk dat je deze trick zo snel mogelijk onder de knie krijgt. Best oefen je deze elke sessie zelfs al kan je
                    hem al. Dit om je basics goed te beheersen.
                </p>
                <h4>Opbouwen naar de trick</h4>
                <p>
                    Voor je de real deal gaat proberen zijn er een aantal dingen die je best eerst kunt oefenen. Eerst en vooral is de kicker
                    comfortabel nemen. Zolang je dit niet 9/10 keer land oefen je hier best eerst op verder. Nadat je dit kan kun je eerst een
                    heelside frontside 180 oefenen op het water en kicker. Daarna bouw je op naar een surface 360 waarbij je voor het eerst je hendel
                    zult moeten doorgeven. Dit kan je eventueel ook nog eens op een obstakel doen om de handle sneller te leren uitvoeren. Als je al
                    deze dingen kunt ben je klaar voor je eerste 360!
                </p>
                <h4>Tips voor je eerste poging</h4>
                <p>Een aantal dingen waar je kan op letten tijdens het proberen zijn volgende:</p>
                <ul>
                    <li>- Zorg ervoor dat je met een constante spanning naar de kicker snijdt</li>
                    <li>- Hou je armen dicht bij je zodat je de handle makkelijker kunt doorgeven in de lucht.</li>
                    <li>- Vanaf je aan de onderkant van de kicker komt stop je met aansnijden zodat je board plat is op de kicker</li>
                    <li>- Eerst SPRINGEN dan handle pass. Dit geeft je namelijk veel meer tijd en later ook controle</li>
                    <li>- na je de handle pass hebt kijk je waar je gaat landen en plooi je je kniëen</li>
                </ul>
                <h4>De perfecte uitvoering</h4>
                <p>
                    Nadat je er een aantal hebt geland moet je kritisch blijven voor jezelf en altijd proberen verbeteren. Voor deze trick zijn
                    volgende dingen waar je kan op letten:
                </p>
                <ul>
                    <li>- Vermijd pre-spin op de kicker zelf (rotatie voor je in de lucht bent)</li>
                    <li>
                        - Voer de spin uit op het hoogste punt in de lucht. Je delayed je trick eigenlijk een beetje waardoor je het makkelijker laat
                        lijken
                    </li>
                    <li>- Hoe hoger hoe beter dus haal je springveren maar uit de kast.</li>
                    <li>- Probeer creatieve varianten van de trick. (grabs, handplants, fashion air...)</li>
                </ul>
            </div>
            <div className="trick-info__questions">
                Heb je nog vragen bij de opbouwende tricks, dan kan je ze ook altijd apart terugvinden met extra uitleg en een filmpje om je te
                helpen.
            </div>
        </section>
    );
};

export default TrickInfo;
