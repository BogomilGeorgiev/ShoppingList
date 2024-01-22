import { useState } from "react"
import { Item } from "./Item"
import { Option } from "../Option";
import './GroceriesList.css';

export const GroceriesList = ({ items, onToggleItem, onDeleteItem, onClearList }) => {

    const [sorted, setSorted] = useState('input');

    let sortedItems;

    if (sorted === 'name') {
        sortedItems = items
            .slice()
            .sort((a, b) => a.product.localeCompare(b.product));
    }

    if (sorted === 'input') sortedItems = items;

    if (sorted === 'quantity') {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.quantity - b.quantity));
    }


    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) =>
                    <Item item={item}
                        key={item.id}
                        onToggleItem={onToggleItem}
                        onDeleteItem={onDeleteItem} />)}
            </ul>

            <div className="sort-actions">
                <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
                    <Option value={'name'} optionName={'Sort by Name'} />
                    <Option value={'input'} optionName={'Sort by Input'} />
                    <Option value={'quantity'} optionName={'Sort by Quantity'} />
                </select>
                <button onClick={onClearList} className="clear-btn">Clear List</button>
            </div>
        </div >
    )

}