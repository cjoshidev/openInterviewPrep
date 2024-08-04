import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"
import './SectionOne.style.css'


const SectionOne = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <div style={{
            width: '100%',
            height: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundSize: '20px 20px',
        }}>
            <div style={{
                zIndex: 1,
                textAlign: 'center',
            }}>
                <h2 className=" scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                    ONE STOP SOLUTION FOR INTERVIEW PREPARATION
                </h2>
                <h2 className=" scroll-m-20 pb-2 pt-4 text-xl font-semibold tracking-tight first:mt-0 ">
                    IF YOU ARE DONE WITH TUTORIAL HELL, READING LOT OF BLOGS AND WITH THE PROBLEM OF TOO MUCH TO LOOK AFTER
                </h2>
                <Button className="mt-8">{isAuthenticated ? 'Dashboard' : 'Start Preparing'}</Button>
            </div>
        </div>)
}


export default SectionOne