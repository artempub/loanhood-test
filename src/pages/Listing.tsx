import React, { useState, useEffect } from 'react';

import { slice } from 'lodash';
import { MOCK_PROJECTS } from "../type/MockItems";
import { Project } from "../type/ShopItem";
import ItemCard from "../components/ShopItem/ItemCard";
import { api } from '../services/Api';

interface ShopItemListProps {
    projects: Project[];
}

const Listing = ({ projects }: ShopItemListProps) => {

    const [index, setIndex] = useState(3);
    const [item, setItem] = useState<Project[]>([]);
    const initialPosts = slice(item, 0, index);
    const [isCompleted, setIsCompleted] = useState(false);

    const loadMore = () => {
        setIndex(index + 3);
        console.log(index);
        console.log("item", item.length);
        if ((index: any) => item.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }

    const getData = async () => {
        try{
            const data: any = await api.get('/v1/item/?page=1&limit=10');
            console.log(data.results);
            setItem(data.results);
            // console.log(initialPosts);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-wrap  items-center p-10">
                {initialPosts.map((project) => (
                    <ItemCard project={project} key={project.id}></ItemCard>
                ))}
            </div>
            <div className='mb-5'>
                {isCompleted ? (
                    // <button onClick={loadMore} className="flex-1 font-bold text-xl bg-[#6b8037] text-white px-6 py-3 rounded-xl hover:bg-[#bbff36] hover:text-black duration-200">Load More +</button>
                    <></>
                    ) : (
                    <button onClick={loadMore} className="flex-1 font-extrabold text-xl bg-[#e9f97a] border-2 border-black text-black px-6 py-3 ">Load More +</button>
                )}
            </div>
        </div>
    );
}
export default Listing;