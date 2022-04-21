import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Footer() {
    return (
        <>

            <footer className="footer " style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <div className="row p-5 ">
                        <div className="col common-letter px-5">Conditions of Use</div>
                        <div className="col common-letter">Contact Us</div>
                        <div className="col common-letter">Privacy Notice</div>
                        <div className="col common-letter">MaCapital.inc </div>

                    </div>
                </div>
            </footer>
        </>

    )
}
export default Footer; 