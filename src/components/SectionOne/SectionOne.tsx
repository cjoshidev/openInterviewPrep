import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"
import './SectionOne.style.css'
import { useNavigate } from "react-router-dom"
import SupaBasePage from "../supaBase"


const SectionOne = () => {
    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate();

    const handleRoutetoDashboard = () => {
        navigate('/dashboard')
    }

    const handleStartPreparing = () => {
        console.log("Start preparing");
    }

    return (
        <div className="w-full h-[600px] flex flex-col items-center justify-center relative bg-cover bg-[20px_20px] p-5">
            <div style={{
                zIndex: 1,
                textAlign: 'center',
            }}>
                <h2 className=" scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                    ONE STOP SOLUTION FOR INTERVIEW PREPARATION
                </h2>
                <SupaBasePage />
                <h2 className=" scroll-m-20 pb-2 pt-4 text-xl font-semibold tracking-tight first:mt-0 ">
                    IF YOU ARE DONE WITH TUTORIAL HELL, READING LOT OF BLOGS AND WITH THE PROBLEM OF TOO MUCH TO LOOK AFTER
                </h2>
                <Button className="mt-8" onClick={isAuthenticated ? handleRoutetoDashboard : handleStartPreparing}>{isAuthenticated ? 'Dashboard' : 'Start Preparing'}</Button>
            </div>
        </div>)
}


export default SectionOne