import { SectionLabel } from "@components";
import { useNewspostContext } from "@hooks/useNewspostContext";
import { timestampToDate } from "@config/helpers/dateFormatting";
import "./newsfeed.scss";

const Newsfeed = () => {
    const { newsposts } = useNewspostContext();

    return (
        <section className="newsfeed">
            <div className="newsfeed__col">
                <SectionLabel name="Nieuws" />
                <ul className="newsfeed__posts">
                    {newsposts &&
                        newsposts.map((post) => (
                            <li key={post._id} className="newsfeed__post">
                                <h3 className="newsfeed__post-title">{post.title}</h3>
                                <span>{timestampToDate(post.createdAt)}</span>
                                <p className="newsfeed__post-content">{post.description.substring(0, 300)}</p>
                                <button className="newsfeed__read-more-btn">meer lezen</button>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="newsfeed__col">
                <div className="newsfeed__banner">
                    <img src="/images/newsfeed-banner.png" alt="newsfeed banner" />
                </div>
            </div>
        </section>
    );
};

export default Newsfeed;
