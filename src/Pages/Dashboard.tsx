import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Dashboard = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getQuestion() {
            const { data } = await supabase.from('machine_coding_question').select();
            setQuestions(data || []);
        }

        getQuestion();
    }, []);

    const handleRoutetoPractice = (question_id: string) => {
        navigate(`/practice/${question_id}`);
    };

    return (
        <div className="flex">
            {/* Sticky Sidebar */}
            <div className="w-1/6 h-[800px] border flex-col sticky gap-4 top-0 p-4 mt-12 ml-6 rounded-xl">
                <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Filter</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Checkbox /><label style={{ fontWeight: 500 }}>Machine Coding</label>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Checkbox /><label style={{ fontWeight: 500 }}>Javascript</label>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Checkbox /><label style={{ fontWeight: 500 }}>React</label>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Checkbox /><label style={{ fontWeight: 500 }}>System Design</label>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center w-5/6 mb-4">
                <div className="flex flex-col gap-2 border-2 border-black rounded-lg p-4 w-full mt-12 mb-12 max-w-4xl">
                    <p className="text-2xl font-bold">Hello Chandan</p>
                    <p className="text-l font-bold">Your Progress</p>
                    <p className="text-4xl font-bold">0/{questions.length}</p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-screen-lg items-center justify-center cursor-pointer">
                    {questions?.map((q) => (
                        <div
                            key={q.id}
                            className="w-full max-w-4xl border border-black rounded-lg gap-2 p-4 flex flex-col"
                        >
                            <div className="flex gap-4 items-center">
                                <Checkbox className="mt-1 h-8 w-8 rounded-full" />
                                <div className="flex flex-col gap-2" onClick={() => handleRoutetoPractice(q.id)}>
                                    <p className="font-bold">{q.header}</p>
                                    <p>{q.sub_header}</p>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm">{q.author}</p>
                                            <SocialIcon
                                                bgColor="black"
                                                style={{ height: 15, width: 15 }}
                                                url="https://www.linkedin.com/in/chandan015/"
                                            />
                                        </div>
                                        <Badge>{q.difficulty}</Badge>
                                        {q?.tech_tags?.split(',').map((tag: string) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Dashboard;
