import Image, { StaticImageData } from "next/image";
import type { LinkProps } from "next/link";

interface ArticleCardProps extends LinkProps {
    category: string;
    date: string;
    title: string;
    description: string;
    imageUrl: StaticImageData | string;
}

export function ArticleCard({
    category,
    date,
    title,
    description,
    imageUrl,
    ...props
}: ArticleCardProps) {
    description = `${description.substring(0, 100)} ...`;

    return (
        <div className="bg-white rounded-xl shadow-md p-8">
            <div className="">
                <span className="py-2 px-3 font-bold text-sm text-navy-500 bg-gray-600 rounded-l-md">
                    {category}
                </span>
                <span className="py-2 px-3 font-black text-sm text-navy-500 bg-gray-400 rounded-r-md">
                    {date}
                </span>
            </div>

            <div className="flex">
                <div className="mt-6 flex flex-col gap-3 text-navy-500">
                    <div className="font-bold text-3xl">
                        <h2>{title}</h2>
                    </div>

                    <div className="text-lg font-medium">
                        <p>{description}</p>
                    </div>
                </div>
                <Image
                    src={imageUrl}
                    alt="foto"
                    className="hidden md:flex bg-contain bg-center w-[300px] h-[210px] rounded-lg"
                />
            </div>
        </div>
    );
}
