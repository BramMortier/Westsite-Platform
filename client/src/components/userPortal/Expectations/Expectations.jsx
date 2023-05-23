import { SectionLabel } from "../../../components";
import "./expectations.scss";

const Expectations = () => {
    return (
        <section className="expectations">
            <div className="expectations__label">
                <SectionLabel name="Wat kan je verwachten" />
            </div>
            <div className="expectations__content">
                <div className="expectations__intro">
                    <p>
                        Als je voor het eerst naar een van onze trainingen wilt komen weet je misschien niet goed wat je kan verwachten. Bij ons kan
                        je terecht om je wakeboard skills aan te scherpen. Ben je een beginneling of heb je al wat rondjes achter de rug, iedereen is
                        welkom om te komen!
                    </p>
                </div>
                <ul className="expectations__list">
                    <li className="expectations__list-item">
                        <h4>1 on 1 coaching</h4>
                        <span className="expectations__list-item-divider"></span>
                        <p>
                            Elke training zijn er meerdere coaches aanwezig, zo heb je altijd iemand om vragen aan te stellen. Er is ook altijd
                            mogelijkheid om dubbeltjes te doen voor extra hulp.
                        </p>
                    </li>
                    <li className="expectations__list-item">
                        <h4>Dikke sfeer</h4>
                        <span className="expectations__list-item-divider"></span>
                        <p>
                            Ook al willen we je elke training proberen pushen tot je limiet. Lachen en dom doen is ook een van onze sterktes. Na de
                            training blijven we vaak iets drinken om bij te praten.
                        </p>
                    </li>
                    <li className="expectations__list-item">
                        <h4>Analyse van je tricks</h4>
                        <span className="expectations__list-item-divider"></span>
                        <p>
                            Als je vast zit met een trick kan je altijd vragen aan een trainer om je eens te filmen. Zo kunnen we achteraf bekijken
                            wat je fout doet en kan je optimaal leren uit de fouten die je maakt.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Expectations;
