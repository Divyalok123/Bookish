import { Component } from "react";
import AddNav from "../../hoc/withNav";
import aboutPageImage from "../../assets/aboutPageImage.jpeg";
import "./About.css";

class About extends Component {
    componentDidMount() {
        document.title = "About | Bookish";
    }

    render() {
        return (
            <div className="about_container container">
                <header className="f_gemunu">About</header>
                <div className="about_page_quote">
                    <span className="f_titillium">“So many books, so little time.”</span>
                    &nbsp;
                    <span className="f_titillium">― Frank Zappa</span>
                </div>
                <div className="about_content">
                    <div className="column1 column">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec velit quam, ornare
                            eget lectus ut, sollicitudin pharetra nisi. Praesent scelerisque nec turpis ac
                            pellentesque.Proin vel magna sagittis est elementum vestibulum vitae ac
                            leo.Curabitur vel aliquet ipsum.Donec sed nunc at enim lacinia laoreet nec non
                            neque.Donec aliquam fermentum urna sed viverra.Duis ut mauris et eros posuere
                            convallis.In hac habitasse platea dictumst.Donec in lectus ut neque accumsan
                            fringilla sed in leo.Aliquam est purus, elementum sit amet purus in, tincidunt
                            tincidunt augue.Cras imperdiet venenatis orci a egestas.Orci varius natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            <br />
                            <br />
                            Etiam laoreet feugiat lacus in posuere.Maecenas mollis dignissim ante, vitae
                            semper ex malesuada sed.Fusce eget finibus sem.Vivamus varius dictum dolor at
                            porta.Vivamus ex mauris, porta ac pharetra vitae, cursus eget felis.Sed semper
                            nisl non odio aliquam eleifend.Mauris quis malesuada ex.Maecenas at malesuada
                            odio. Nunc at condimentum ligula, ac sagittis metus.Proin auctor ipsum a porta
                            hendrerit.Vestibulum ex felis, tempor non sagittis nec, accumsan et ex.Vestibulum
                            in vestibulum sapien.Duis in aliquam lacus, vel rutrum augue.Morbi consequat ipsum
                            ipsum, quis euismod ipsum scelerisque ut.Mauris lacinia purus ac aliquam euismod.
                            <br />
                            <br />
                            Suspendisse quis nisl magna.Curabitur vitae lorem vehicula, sollicitudin metus eu,
                            pharetra velit.Aenean auctor leo id dui condimentum bibendum ut nec
                            ligula.Phasellus porta, lorem vel ornare tincidunt, velit mi dapibus magna, quis
                            varius felis lorem sagittis massa.Etiam id sem nibh.Integer laoreet varius sem.
                            Donec tincidunt metus vel dolor luctus tincidunt.Fusce vitae felis id felis
                            accumsan imperdiet.Sed semper viverra molestie. Etiam non sagittis
                            ligula.Phasellus a felis ut libero suscipit finibus eget a urna.Maecenas nulla
                            neque, feugiat a rutrum tincidunt, sagittis nec ipsum.Curabitur tellus nibh,
                            tristique at metus vitae, pretium feugiat est.Vivamus vehicula scelerisque
                            elementum.Donec sollicitudin facilisis enim.Nunc dictum metus mi, a gravida sem
                            consequat id.Morbi leo turpis, pellentesque in malesuada ac, facilisis eget
                            velit.Sed vitae malesuada enim. <br />
                            <br />
                            Sed a pulvinar lorem, et vulputate elit.Nam gravida neque sagittis, pellentesque
                            libero sed, pulvinar nisi.Orci varius natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Etiam viverra ullamcorper gravida.Nulla a nisi vel
                            magna vestibulum blandit.
                        </p>
                    </div>
                    <div className="column2 column">
                        <img src={aboutPageImage} className="about_page_img" alt="books" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNav(About);
