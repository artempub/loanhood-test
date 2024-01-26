# Loanhood test project - FRONTEND

This project is a React front-end test project that demonstrates fetching product data from an API and implementing a load-more feature.

## BACK END

To clone Back-End, you need to switch the branch to the back-end with this command
    
    git checkout loanhood-be




### Front End Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/public-learner/loanhood-fe.git




## 

In the project directory, you can install modules through:

    yarn install

    yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Then You will get this screen.


By Clikcing the button ``LoadMore``



You will have `6` more products on your screen.

You can `change the updated products count` by editing the varible ```pageSize```

`src` / `pages` / `Listing.tsx` 

    const Listing = () => {
        const pageSize = 6;

        const [page, setPage] = useState<number>(0);
        const [items, setItems] = useState<Item[]>(new Array<Item>());
        const [disabled, setDisabled] = useState<boolean>(false);
        const [isLoading, setIsLoading] = useState<boolean>(false);

## If you have any issues while running application

Feel free to contact me `artemivanchuk90@gmail.com`

