import SandPack from "@/components/SandPack/SandPack";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyIcon } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton"


const Practice = () => {
    const { id: questionID } = useParams();
    const [questionData, setQuestionData] = useState<any>();

    useEffect(() => {
        const getQuestionData = async () => {
            const { data } = await supabase
                .from("machine_coding_question")
                .select("*")
                .eq("id", questionID)
                .single();
            setQuestionData(data);
        };
        getQuestionData();
    }, [questionID]);

    const handleCodeCopy = async () => {
        try {
            await navigator.clipboard.writeText(questionData?.solution_code);
            toast({ title: "Copied" });
        } catch (e) {
            toast({ title: "Error while copying", variant: "destructive" });
        }
    };

    return (
        <div className="flex">
            <div className="w-2/5 h-screen bg-white p-4 overflow-scroll">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">Question: {questionID}</p>
                    <Button>Mark as Resolved</Button>
                </div>
                {
                    !questionData ?
                        <Skeleton className="h-[100%] w-[100%] rounded-xl" /> :
                        <div className="flex flex-col mt-6 gap-6">
                            <p className="text-2xl font-extrabold">{questionData?.header}</p>
                            <div className="flex flex-col gap-6 border border-black p-4 rounded-lg bg-gray-300">
                                <p>{questionData?.sub_header}</p>
                                <p>{questionData?.question_body}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-lg font-semibold">Demo Solution Image</p>
                                <img src={questionData?.question_demo_image} alt="Demo" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold">Company Tags</p>
                                <div className="flex gap-2">
                                    {questionData?.company_tags?.split(",")?.map((tag: string) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col border border-black p-2 gap-2 rounded-lg bg-gray-300">
                                <div className="flex items-center justify-between rounded">
                                    <p className="text-xl font-bold">Solution</p>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <CopyIcon
                                                    className="cursor-pointer"
                                                    onClick={handleCodeCopy}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>Copy</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <div className="h-96 overflow-y-scroll">
                                    <SyntaxHighlighter language="javascript">
                                        {questionData?.solution_code}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>}
            </div>
            <div className="w-3/5 h-screen">
                <SandPack
                    code={`export default function App() {
  return <h1>Hello from Open Interview Prep</h1>;
}`}
                />
            </div>
        </div>
    );
};

export default Practice;
