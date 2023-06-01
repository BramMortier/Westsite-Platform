import { TrickCard } from "@components";
import { useTrickContext } from "@hooks/useTrickContext";
import "./trickList.scss";

const TrickList = () => {
    const { tricks } = useTrickContext();

    return <section className="trick-list">{tricks && tricks.map((trick) => <TrickCard key={trick._id} trick={trick} />)}</section>;
};

export default TrickList;
