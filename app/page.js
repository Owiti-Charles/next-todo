import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/page.module.css";
import AddNewTodo from "./add-todo"
import TodoList from "./todo-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AddNewTodo/>
      <TodoList/>
    </div>
  );
}
