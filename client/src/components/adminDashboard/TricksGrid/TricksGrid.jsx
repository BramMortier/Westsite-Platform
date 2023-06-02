import { TrickCard } from "@components";
import { useTrickContext } from "@hooks/useTrickContext";
import "./tricksGrid.scss";

const TricksGrid = () => {
    const { tricks } = useTrickContext();

    return <section className="tricks-grid">{tricks && tricks.map((trick) => <TrickCard key={trick._id} trick={trick} />)}</section>;
};

export default TricksGrid;
