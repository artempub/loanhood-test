import React, { useState, useEffect } from 'react';

// Components
import ItemCard from "../components/ShopItem/ItemCard";

// Type
import { Item } from "../type/ShopItem";

// Axios API
import { api } from '../services/Api';

const Listing = () => {
    const pageSize = 3;

    const [page, setPage] = useState<number>(0);
    const [items, setItems] = useState<Item[]>(new Array<Item>());
    const [disabled, setDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadMore = async () => {
        try {
            setIsLoading(true);
            const data: any = await api.get<Item[]>('/v1/item', {
                params: {
                    page: page + 1,
                    limit: pageSize,
                }
            });

            if(data.page == data.totalPages) {
                setDisabled(true);
            }
            setPage(page + 1);
            setItems([...items, ...data.results]);
            setIsLoading(false);
        }
        catch (error) {
            console.error("Error while loading cloth items");
        }
    }

    useEffect(() => {
        loadMore();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-wrap  items-center p-10">
                {items.map((item: Item) => (
                    <ItemCard item={item} key={item.id}></ItemCard>
                ))}
            </div>
            <div className='mb-5'>
                {!disabled && <button onClick={loadMore} className="flex-1 font-extrabold text-xl bg-[#e9f97a] border-2 border-black text-black px-6 py-3 ">
                    {isLoading ? "Loading" :"Load More +"}
                </button>}
            </div>
        </div>
    );
}
export default Listing;