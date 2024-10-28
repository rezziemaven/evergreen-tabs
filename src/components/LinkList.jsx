import SortableList, { SortableItem } from 'react-easy-sort';

export const LinkList = (props) => {
  return (
    <>
      <SortableList
        className="list"
        draggedItemClassName="dragged"
        draggedForbiddenClassName="notallowedcursor"
        forbiddenPointType="element"
        onSortEnd={props.onDragLink}
      >
        {props.links.map((link) => (
          <SortableItem key={link.id}>
            {/* <LinkListItem
                    id={link.id}
                    url={link.url}
                    onRemove={removeLink}
                  /> */}
            <div className="link-item">
              <button className="move-item">&#8942;</button>
              <span className="link">{link.url}</span>
              <button
                onClick={() => props.onRemoveLink(link.id)}
                className="delete-item"
              >
                &times;
              </button>
            </div>
          </SortableItem>
        ))}
      </SortableList>

      <button className="clear-list" onClick={props.onClear}>
        Clear list
      </button>
    </>
  );
};
