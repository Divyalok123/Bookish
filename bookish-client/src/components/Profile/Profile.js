import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import AddNav from '../../hoc/withNav';
import dummyPerson from "../../assets/dummyPerson.png";
import "./Profile.css";

class Profile extends Component {
    componentDidMount() {
        document.title = "Profile | Bookish";
    }

    render() {
        return (
            <div className="profile_container container">
                <div className="profile_content">
                    <div className="profile_left f_yaldevi">
                        <div className="profile_bio_first">
                            <img src={dummyPerson} alt="dummy person" />
                            <div>
                                <p>Person Name</p>
                                <p>Person Title</p>
                            </div>
                        </div>
                        <div className="profile_bio_second">
                            <p className="profile_likes">Likes</p>
                            <p className="profile_likes_list">
                                <span>Crime</span>
                                <span>Thriller</span>
                                <span>Action</span>
                            </p>
                        </div>
                        <div className="profile_bio_third">
                            <p className="profile_others">Other profiles</p>
                            <ul className="profile_link_list">
                                <li>Linkedin Link</li>
                                <li>Facebook Link</li>
                                <li>Instagram Link</li>
                                <li>Scribd Link</li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile_right">
                        <div className="profile_about">
                            <header className="profile_comp_header f_titillium">About</header>
                            <div className="profile_comp_content f_yaldevi">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="profile_favourites">
                            <header className="profile_comp_header f_titillium">Favourites</header>
                            <div className="profile_comp_content f_yaldevi">
                                <ul className="profile_fav_list">
                                    <li>
                                        <div>Favourite book 1</div>
                                        <div>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>Favourite book 2</div>
                                        <div>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>Favourite book 3</div>
                                        <div>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </div>
                                    </li>
                                    <li>
                                        <div>Favourite book 4</div>
                                        <div>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNav(Profile);
