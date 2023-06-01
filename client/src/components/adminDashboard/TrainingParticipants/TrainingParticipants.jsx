import "./trainingParticipants.scss";

const TrainingParticipants = () => {
    return (
        <section className="training-participants">
            <h4>Aanwezigen</h4>
            <div className="training-participants__overview">
                <div className="training-participants__present-trainers">
                    <h5>
                        Trainers (<span className="training-participants__present-trainers-amount">3</span>)
                    </h5>
                    <ul className="training-participants__present-trainers-list">
                        <li className="training-participants__present-trainer">Arno Dhont</li>
                        <li className="training-participants__present-trainer">Nora Houwen</li>
                        <li className="training-participants__present-trainer">Warre Lecluyze</li>
                    </ul>
                </div>
                <div className="training-participants__present-members">
                    <h5>
                        Leden (<span className="training-participants__present-members-amount">5</span>)
                    </h5>
                    <ul className="training-participants__present-members-list">
                        <li className="training-participants__present-member">Bram Mortier</li>
                        <li className="training-participants__present-member">Angelo Vanloocke</li>
                        <li className="training-participants__present-member">Tim De Rooze</li>
                        <li className="training-participants__present-member">Sander Dierickx</li>
                        <li className="training-participants__present-member">Barry Oliva</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TrainingParticipants;
