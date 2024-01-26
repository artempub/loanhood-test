import { Project } from "../../type/ShopItem";

interface ShopIteamCardProps {
    project: Project;
}



function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

const ItemCard: React.FC<ShopIteamCardProps> = ({ project }) => {
    return (
        <>
            <div className="max-w-lg rounded overflow-hidden shadow-lg m-10">
                <img src={project.imageUrl} alt={project.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.name}</div>
                    <p className="text-gray-700 text-base">
                        {(formatDescription(project.description))}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Budget : {project.budget.toLocaleString()}</span>
                </div>
            </div>
        </>
    );
}

export default ItemCard