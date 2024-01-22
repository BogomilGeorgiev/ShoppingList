import './Footer.css';

export const Footer = ({ items }) => {

    const purchasedItems = items.filter((item) => item.purchased);
    const percantage = (purchasedItems.length / items.length) * 100;
    const shoppingCompleted = purchasedItems.length === items.length


    return <footer>

        {items.length === 0
            ? 'Happy Shopping!'
            : shoppingCompleted
                ? 'Your shopping List is completed'
                : purchasedItems.length === 1
                    ? `You have purchased ${purchasedItems.length} product from the list.`
                    : `You have purchased ${purchasedItems.length} products from the list.`}


        {percantage === 100
            ? ''
            : purchasedItems.length
                ? `Your shopping list is ${Math.round(percantage)}% completed.`
                : ''}

    </footer>
}