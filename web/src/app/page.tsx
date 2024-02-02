import { Category } from "@/components/Category";

export default function Home() {
    return (
        <div>
            <div className="bg-navy-500 md:rounded-b-xl pb-10 pt-8 md:pb-32 md:pt-20">
                <h1 className="text-white font-bold text-5xl md:text-[52px] w-2/3 mx-auto">
                    Insights about my personal and work life, and the
                    in-betweens.
                </h1>
            </div>

            <div className="mt-24 mx-10 md:mx-60">
                <Category hero="Personal" />
            </div>
        </div>
    );
}
