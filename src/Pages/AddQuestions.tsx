import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import supabase from "@/utils/supabase";
import { toast } from "@/components/ui/use-toast";

type TFormDataProps = {
    header: string;
    sub_header: string;
    question_body: string;
    difficulty: string;
    tech_tags: string;
    company_tags: string;
    solution_code: string;
    question_demo_image: string;
    author: string;
}

type TFormDataKeys = keyof TFormDataProps;

const AddQuestions = () => {
    const [formData, setFormData] = useState<TFormDataProps>({
        header: "",
        sub_header: "",
        question_body: "",
        difficulty: "Easy", // Set default value for the dropdown
        tech_tags: "",
        company_tags: "",
        solution_code: "",
        question_demo_image: "",
        author: ""
    });

    const formDataKeys = Object.keys(formData) as TFormDataKeys[];

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("machine_coding_question")
            .insert([formData]);

        if (error) {
            console.error("Error inserting data:", error);
            toast({ title: "Error while adding question", description: 'Please try again', variant: "destructive" });
        } else {
            console.log("Data inserted successfully:", data);
            toast({ title: "Question Created successfully" });
            setFormData({
                header: "",
                sub_header: "",
                question_body: "",
                difficulty: "Easy", // Reset dropdown to default value
                tech_tags: "",
                company_tags: "",
                solution_code: "",
                question_demo_image: "",
                author: ""
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-2 items-center"
        >
            <p className="text-2xl font-bold">Add Question</p>

            {formDataKeys.map((field) => (
                field === "difficulty" ? (
                    <div key={field} className="flex flex-col gap-2">
                        <p className="text-lg font-bold">Difficulty</p>
                        <select
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="w-96 p-2 border rounded-lg"
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                ) : (
                    <div key={field} className="flex flex-col gap-2">
                        <p className="text-lg font-bold">{field}</p>
                        <Input
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-96"
                        />
                    </div>
                )
            ))}

            <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white text-lg rounded-lg cursor-pointer"
            >
                Submit
            </button>
        </form>
    );
};

export default AddQuestions;
