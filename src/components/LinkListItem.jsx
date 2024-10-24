export function LinkListItem(props) {
  return (
    <div className="link-item">
      <button className="move-item">&#8645;</button>
      <span className="link">{props.url}</span>
      <button onClick={() => props.onRemove(props.id)} className="delete-item">
        &times;
      </button>
    </div>
  );
}
