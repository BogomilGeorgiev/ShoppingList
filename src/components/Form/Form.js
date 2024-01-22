import { useState } from "react"
import { Option } from "../Option";
import './Form.css'

export const AddItem = ({ onAddItem }) => {

    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!product) return alert('Please enter an item')

        const newItem = {
            id: Math.floor(Math.random() * 100),
            quantity,
            product,
            purchased: false
        }

        onAddItem(newItem);

        setProduct('');
        setQuantity(1);

    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>I need...</h3>
            <input type="text"
                placeholder="Item..."
                value={product}
                onChange={(e) => setProduct(e.target.value)}></input>
            <label>Quantity</label>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {Array.from({ length: 30 }, (_, i) => i + 1)
                    .map((num) => <Option key={num} value={num} optionName={num} />)}
            </select>
            <button type="submit">Add Product</button>
        </form>
    )
}