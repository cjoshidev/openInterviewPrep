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
        <div className="flex flex-col items-center">
            <div style={{ display: 'flex', height: '100%', gap: 8, flexDirection: 'column', border: '2px solid black', borderRadius: 16, padding: 16, width: '100%', margin: '50px 0px' }} className="max-w-4xl">
                <p className="text-2xl font-bold">Hello Chandan</p>
                <p className="text-l font-bold">Your Progress</p>
                <p className="text-4xl font-bold">0/{questions.length}</p>
                <p></p>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-screen-lg items-center justify-center cursor-pointer">
                {questions?.map((q) => (
                    <div
                        key={q.id}
                        className="w-full max-w-4xl border border-black rounded-lg gap-2 p-4 flex flex-col"
                    >
                        <div
                            className="flex gap-4 items-center"
                        >
                            <Checkbox className="mt-1 h-8 w-8 rounded-full" />
                            <div className="flex flex-col gap-2" onClick={() => handleRoutetoPractice(q.id)}>
                                <p className="font-bold">{q.header}</p>
                                <p>{q.sub_header}</p>
                                <div className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        <p className="text-sm">{q.author}</p>
                                        <SocialIcon
                                            bgColor="black"
                                            style={{ height: 15 }}
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
    );
};

export default Dashboard;
