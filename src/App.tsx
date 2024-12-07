import { Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAllTodos } from "./lib/todo";
import { Todo } from "./domain/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      setTodos(todosData);
      setIsLoading(false);
    };

    getAllTodos();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 data-testid="title">TODOリスト</h1>
      <Table.Root size="sm" data-testid="table">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Done</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">CreatedAt</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {todos.map((todo) => (
            <Table.Row key={todo.id}>
              <Table.Cell>{todo.title}</Table.Cell>
              <Table.Cell>{todo.done ? "TRUE" : "FALSE"}</Table.Cell>
              <Table.Cell textAlign="end">{todo.created_at}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}

export default App;
