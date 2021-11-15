import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginSuccess } from "../../context/AuthActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AddNav from "../../hoc/withNav";
import "../AddBook/AddBook.css";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

function ProfileUpdate() {
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push("/");
            return;
        }


        document.title = "Update Profile | Bookish";

        document.getElementById("profile_img_input").addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0]) {
                document.getElementById("profile_img_name").innerHTML = e.target.files[0].name;
            }
        });
    }, [user, history]);

    const handleUpdateClick = async (e) => {
        e.preventDefault();

        let checkvals = [];
        Array.from(e.target.genre).forEach((gen) => {
            if (gen.checked) {
                checkvals.push(gen.value);
            }
        });

        const formData = new FormData();

        if (e.target.profile_img_input.files)
            formData.append('profile_img_input', e.target.profile_img_input.files[0]);
        if (e.target.firstname) 
            formData.append('firstname', e.target.firstname.value);
        if (e.target.lastname) 
            formData.append('lastname', e.target.lastname.value);
        if (e.target.about) 
            formData.append('about', e.target.about.value);
        if (e.target.title) 
            formData.append('title', e.target.title.value);
        if (checkvals.length) 
            formData.append('genre', checkvals);
        if (e.target.linkedin) 
            formData.append('linkedin', e.target.linkedin.value);
        if (e.target.instagram) 
            formData.append('instagram', e.target.instagram.value);
        if (e.target.facebook) 
            formData.append('facebook', e.target.facebook.value);
        formData.append('userid', user._id);

        const url = "/updateprofile";
        try {
            await axios
                .post(url, formData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
                .then((res) => {
                    if(res.data.status === "success") {
                        dispatch(LoginSuccess(res.data.user));
                        toast.success(res.data.message);
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log("Error: ", err);
                });
        } catch (err) {
            console.log("Error occured in axios request!");
            console.log(err);
        }
    };

    return (
        <div className="profileupdate_container container">
            <header>Update Profile</header>
            <form
                action="/updateprofile"
                className="add_update_form f_exo"
                encType="multipart/form-data"
                onSubmit={handleUpdateClick}
            >
                <div className="update_img_div flex_cent">
                    <label htmlFor="profile_img_input">
                        <div id="profile_input_label" className="input_label pointer">
                            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                            Upload Book
                        </div>
                        <div className="input_file_name" id="profile_img_name"></div>
                    </label>
                    <input
                        type="file"
                        id="profile_img_input"
                        className="add_update_file_input"
                        name="profile_img_input"
                    />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>First Name</div>
                    </label>
                    <input type="text" id="first_name_input" className="text_input f_lato" name="firstname" />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>Last Name</div>
                    </label>
                    <input type="text" id="last_name_input" className="text_input f_lato" name="lastname" />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>About</div>
                    </label>
                    <textarea type="text" id="about_input" className="text_input f_lato" name="about" />
                </div>
                <div className="flex_bet">
                    <label>Choose your title</label>
                    <div className="title_div">
                        <div>
                            <input type="radio" id="radio_reader" name="title" value="reader" />
                            <label htmlFor="radio_reader">Reader</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_bookworm" name="title" value="bookworm" />
                            <label htmlFor="radio_bookworm">Bookworm</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_author" name="title" value="author" />
                            <label htmlFor="radio_author">Author</label>
                        </div>
                        <div>
                            <input type="radio" id="radio_explorer" name="title" value="explorer" />
                            <label htmlFor="radio_explorer">Explorer</label>
                        </div>
                    </div>
                </div>
                <div className="flex_bet">
                    <label>Choose genres you like</label>
                    <div className="genre_div">
                        <div>
                            <input type="checkbox" id="checkbox_thriller" name="genre" value="thriller" />
                            <label htmlFor="checkbox_thriller">Thriller</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_comedy" name="genre" value="comedy" />
                            <label htmlFor="checkbox_comedy">Comedy</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_kids" name="genre" value="kids" />
                            <label htmlFor="checkbox_kids">Kids</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_romance" name="genre" value="romance" />
                            <label htmlFor="checkbox_romance">Romance</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_suspense" name="genre" value="suspense" />
                            <label htmlFor="checkbox_suspense">Suspense</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_horror" name="genre" value="horror" />
                            <label htmlFor="checkbox_horror">Horror</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_crime" name="genre" value="crime" />
                            <label htmlFor="checkbox_crime">Crime</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_action" name="genre" value="action" />
                            <label htmlFor="checkbox_action">Action</label>
                        </div>
                    </div>
                </div>
                <div style={{ fontWeight: "bold" }}>Add Other Profiles</div>
                <div className="flex_bet">
                    <label>
                        <div>Linkedin</div>
                    </label>
                    <input type="text" id="linkedin" className="text_input f_lato" name="linkedin" />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>Instagram</div>
                    </label>
                    <input type="text" id="instagram" className="text_input f_lato" name="instagram" />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>Facebook</div>
                    </label>
                    <input type="text" id="facebook" className="text_input f_lato" name="facebook" />
                </div>
                <div className="form_submit flex_cent">
                    <button type="submit" className="f_exo">
                        Update Profile
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default AddNav(ProfileUpdate);
