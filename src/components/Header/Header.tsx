import React from "react";
import UserNav from "../UserNav";
import { Button } from "../ui/button"
import Navigation from "./Navigation"
import { useAuth0 } from "@auth0/auth0-react";

const Header = React.memo(() => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className="sticky top-0 z-50 bg-white" style={{ display: 'flex', height: 50, width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid black' }}>
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight cursor-pointer" onClick={() => window.location.href = '/'}>
                Open Interview Prep
            </h1>
            <Navigation />
            <div className="flex gap-4">
                {isAuthenticated ? <UserNav /> : <Button onClick={() => loginWithRedirect()}>Login</Button>}
            </div>

        </div>
    )
})


export default Header