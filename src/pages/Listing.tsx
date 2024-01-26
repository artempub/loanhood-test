import { MOCK_PROJECTS } from "../type/MockItems";
import { Project } from "../type/ShopItem";
import ItemCard from "../components/ShopItem/ItemCard";

interface ShopItemListProps {
    projects: Project[];
}

const Listing = ({ projects }: ShopItemListProps) => {
    return (
        <>
            <div className="flex flex-wrap items-center p-10">
                {projects.map((project) => (
                    <ItemCard project={project}></ItemCard>
                ))}
            </div>
        </>
    );
}
export default Listing;