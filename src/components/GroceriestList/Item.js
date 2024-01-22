export const Item = ({ item, onToggleItem }) => {

    return <li>
        {item.purchased ? '✅' : <input type="checkbox" onChange={() => onToggleItem(item.id)} />}
        <span key={item.id} style={item.purchased ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.product}
        </span>
        {item.purchased && <button className="reverse-btn" onClick={() => onToggleItem(item.id)}>🔄</button>}
    </li>
}