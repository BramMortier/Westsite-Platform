import { useNewspostContext } from "@hooks/useNewspostContext";
import { timestampToDate } from "@config/helpers/dateFormatting";
import "./nieuwsPostList.scss";

const NieuwsPostList = () => {
    const { newsposts } = useNewspostContext();

    return (
        <section className="nieuws-post-list">
            <ul className="nieuws-post-list__posts">
                {newsposts &&
                    newsposts.map((newspost) => (
                        <li key={newspost._id} className="nieuws-post-list__post">
                            <div className="nieuws-post-list__post-label">{newspost.label}</div>
                            <div className="nieuws-post-list__post-content">
                                <p>{`${newspost.description.substring(0, 60)}...`}</p>
                                <p>{timestampToDate(newspost.createdAt)}</p>
                            </div>
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default NieuwsPostList;
