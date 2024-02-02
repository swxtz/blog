import { ArticleCard } from "../ArticleCard";

import photoPlaceholder from "../../assets/photo.jpg";
interface CategoryProps {
    hero: string;
    articles?: string[];
}

export function Category({ hero }: CategoryProps) {
    return (
        <div>
            <h2 className="text-navy-500 text-3xl md:text-4xl font-bold">
                {hero}
            </h2>

            <div className="mt-16 flex flex-col gap-8">
                <ArticleCard
                    category="Teste"
                    date="02/02/2024"
                    title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veritatis!"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sunt, dicta debitis dolorem nemo ratione dolore laboriosam sint vel delectus ad id at quidem explicabo odit nostrum velit, veniam nobis expedita temporibus magnam tenetur! Harum nostrum incidunt delectus voluptate ullam."
                    imageUrl={photoPlaceholder}
                    href="/1"
                />

                <ArticleCard
                    category="Teste"
                    date="02/02/2024"
                    title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veritatis!"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sunt, dicta debitis dolorem nemo ratione dolore laboriosam sint vel delectus ad id at quidem explicabo odit nostrum velit, veniam nobis expedita temporibus magnam tenetur! Harum nostrum incidunt delectus voluptate ullam."
                    imageUrl={photoPlaceholder}
                    href="/1"
                />

                <ArticleCard
                    category="Teste"
                    date="02/02/2024"
                    title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veritatis!"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sunt, dicta debitis dolorem nemo ratione dolore laboriosam sint vel delectus ad id at quidem explicabo odit nostrum velit, veniam nobis expedita temporibus magnam tenetur! Harum nostrum incidunt delectus voluptate ullam."
                    imageUrl={photoPlaceholder}
                    href="/1"
                />
            </div>
        </div>
    );
}
