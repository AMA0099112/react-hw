import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import RegisterCard from "../components/RegisterCard";
import Footer from "../components/Footer";

function Register() {
    const title = "Register";
    return (
        <div>
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header title={title} />
                <RegisterCard />
            </div>
            <Footer className="footer" />
        </div>
    )
}

export default Register;