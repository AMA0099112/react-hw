import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import LoginCard from "../components/LoginCard"
import Footer from "../components/Footer"
import { useSearchParams } from "react-router"



function Login() {
    const title = "Login"

    const [searchParams] = useSearchParams()
    const redirect = searchParams.get("redirect")
    const redirectPath = redirect ? redirect : "/";

    return (
        <div>
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header title={title} />
                <LoginCard redirect={redirectPath} />
            </div>
            <Footer />
        </div>
    )
}

export default Login;