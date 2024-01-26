# Loanhood test project - FRONTEND

This branch is a React front-end test project that demonstrates fetching product data from an API and implementing a load-more feature.

## To clone Back-End
To clone Back-End, you need to switch the branch to the back-end with this command
    
    git checkout loanhood-be





## 

Install dependencies

    yarn install


Run application

    yarn start



Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



You will have `6` products on your screen.

You can change the updated products count by editing the varible ```pageSize```

`src / pages / Listing.tsx` 

    const Listing = () => {
        const pageSize = 6;

        const [page, setPage] = useState<number>(0);
        const [items, setItems] = useState<Item[]>(new Array<Item>());
        const [disabled, setDisabled] = useState<boolean>(false);
        const [isLoading, setIsLoading] = useState<boolean>(false);

