import {
    Card,
    CardHeader,
} from "@/components/ui/card"

type TCardProps = {
    header: string
}

const CardComponent = ({ header }: TCardProps) => {
    return <Card className="w-[350px]" style={{ padding: 10 }}>
        <CardHeader className="text-2xl bold  align-center font-semibold tracking-tight pb-3" style={{ alignItems: 'center' }}>{header}</CardHeader>
    </Card>
}


const SectionThree = () => {
    return <div style={{ width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <CardComponent header="Prepare Role wise" />
        <CardComponent header="Prepare Interview Stages" />
        <CardComponent header="Prepare for switch" />
    </div>
}

export default SectionThree