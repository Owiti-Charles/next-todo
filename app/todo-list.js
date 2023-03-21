import Todo from "./todo";
const getTodos = async () => {
  let todos = await fetch("http://localhost:3002/api/todo/list");
  return todos.json();
};
export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <div style={{ listStyleType: "none", padding: 0 }}>
        <ul>
          {todos.map(todo => {
            return (<li style={{ padding: "5px 0" }} key={todo.id}>
              <Todo todo={todo} />
            </li>)
            
          })}
        </ul>
      </div>
    </div>
  );
}
