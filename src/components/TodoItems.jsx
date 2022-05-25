import "./TodoItems.css";

const TodoItems = ({ title, status, id, handleDelete }) => {
  return (
    <div className="item-div">
      <h3 key={id}>{title}</h3>
      <button onClick={() => handleDelete(id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
