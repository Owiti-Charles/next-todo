export default function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" />
      {todo.name}
      <button> Delete</button>
    </div>
  );
}
