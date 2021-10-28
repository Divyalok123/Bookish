import { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about_container container">
                <header className="f_gemunu">About</header>
                <div className="about_page_quote">
                    <span className="f_titillium">“So many books, so little time.”</span>
                    &nbsp;
                    <span className="f_titillium">― Frank Zappa</span>
                </div>
            </div>
        )  
    }
}

export default About;