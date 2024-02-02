import { ActiveLinksButton } from "./Button";

export function ActiveLinks() {
    return (
        <div className="hidden md:flex md:gap-6 lg:gap-10">
            <ActiveLinksButton href="/">Design Tools</ActiveLinksButton>

            <ActiveLinksButton href="#">Daily Updates</ActiveLinksButton>

            <ActiveLinksButton href="#">Tutorials</ActiveLinksButton>

            <ActiveLinksButton href="#">Library</ActiveLinksButton>
        </div>
    );
}
