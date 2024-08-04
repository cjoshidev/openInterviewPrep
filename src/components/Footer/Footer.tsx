import { SocialIcon } from "react-social-icons"

const Footer = () => {
    return (<div style={{ height: '250px', borderTop: '1px solid black', width: '100%', padding: 20, paddingLeft: 150, paddingRight: 150, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
            <div>
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
                    Open Interview Prep
                </h1>
                <div className="flex gap-3 mt-4">
                    <SocialIcon bgColor="black" style={{ height: 40, width: 40 }} url="https://x.com" />
                    <SocialIcon bgColor="black" style={{ height: 40, width: 40 }} url="https://linkedin.com" />
                    <SocialIcon bgColor="black" style={{ height: 40, width: 40 }} url="https://discord.com" />
                </div>

            </div>
            <h4 className="text-m color-grey" style={{
                color: '#64748b'
            }}>Open Frontend Prep is Developed by Chandan Joshi</h4>
        </div>
        <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 className="font-extrabold">Offerings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h4>Learn</h4>
                    <h4>Practice</h4>
                    <h4>Read</h4>
                    <h4>Roadmap</h4>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 className="font-extrabold">Company</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h4>About Us</h4>
                    <h4>Contact Us</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Roadmap</h4>
                    <h4>Terms and Conditions</h4>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer