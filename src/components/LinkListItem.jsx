export function LinkListItem(props) {
  return (
    <li className="" key={props.id}>
      <button className="move-item">&#8645;</button>
      <span className="link">{props.url}</span>
      <button onClick={() => props.onRemove(props.id)} className="delete-item">
        &times;
      </button>
    </li>
  );
}
