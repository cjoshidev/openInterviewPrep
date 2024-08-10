import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { useEffect, useRef } from "react";
import './SectionTwo.style.css'
import { companies } from "@/assets/companyData";

type TCardProps = {
    header: string,
    desc: string,
    button: string
}



const CardComponent = ({ header, desc, button }: TCardProps) => {
    return <Card className="w-[350px]" style={{ padding: 10 }}>
        <CardHeader className="text-4xl bold  align-center font-semibold tracking-tight pb-3" style={{ alignItems: 'center' }}>{header}</CardHeader>
        <CardDescription style={{ padding: 20 }}>{desc}</CardDescription>
        <CardFooter className="flex justify-center">
            <Button>{button}</Button>
        </CardFooter>
    </Card>
}


const SectionTwo = () => {

    const scrollContentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scrollContent = scrollContentRef.current;
        let scrollWidth = 0;
        const speed = 1;

        const scroll = () => {
            if (scrollContent) {
                scrollWidth -= speed;
                if (Math.abs(scrollWidth) >= scrollContent.scrollWidth / 5) {
                    scrollWidth = 0;
                }
                scrollContent.style.transform = `translateX(${scrollWidth}px)`;
            }
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);



    const cardData = [{ id: 1, header: 'FRONTEND', desc: 'Prepare for frontend interview at pace,with quality content and off course without any cost', button: 'Start Preparing' },
    { id: 2, header: 'BACKEND', desc: 'Prepare for Backend interview at pace,with quality content and off course without any cost', button: 'Coming Soon' },
    { id: 3, header: 'DEVOPS', desc: 'Prepare for DevOps interview at pace,with quality content and off course without any cost', button: 'Coming Soon' },
    { id: 3, header: 'SDET/QA', desc: 'Prepare for SDET interview at pace,with quality content and off course without any cost', button: 'Coming Soon' }
    ]


    return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'wrap', padding: '20px', alignItems: 'center', justifyContent: 'center' }} >
        {cardData.map((item) => <CardComponent header={item.header} desc={item.desc} key={item.id} button={item.button} />)}
        <div className="scroll-container">
            <div className="scroll-content" ref={scrollContentRef}>
                {companies.map((company) => (
                    <div className="imgContainer">   <img src={company.logo} alt={company.name} /></div>
                ))}
            </div>
        </div>
    </div>
}

export { CardComponent, SectionTwo }