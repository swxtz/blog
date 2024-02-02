import { ReactNode } from "react";

interface MaxWidthContainerProps {
    children: ReactNode;
}

export function MaxWidthContainer({ children }: MaxWidthContainerProps) {
    return (
        <div className="md:mx-8 md:mt-8 2xl:max-w-7xl 2xl:mx-auto">
            {children}
        </div>
    );
}
