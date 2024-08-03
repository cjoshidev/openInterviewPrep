import { Button } from "../ui/button"
import Navigation from "./Navigation"
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout } = useAuth0();

    return (
        <div style={{ display: 'flex', height: 50, width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid black' }}>
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
                Open Interview Prep
            </h1>
            <Navigation />
            <Button onClick={() => loginWithRedirect()}>Login</Button>
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>


        </div>
    )
}


export default Header