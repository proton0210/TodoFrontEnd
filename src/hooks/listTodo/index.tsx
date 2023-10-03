import { API, Auth } from "aws-amplify";
import { useQuery } from "react-query";

type ListTodosResponse = Todo[];

type Todo = {
  todoId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const listTodos = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const response = await API.graphql({
      query: `
        query ListTodos($userId: ID!) {
          listTodos(userId: $userId) {
            todoId
            title
            completed
            createdAt
            updatedAt
          }
        }
      `,
      variables: {
        userId: user.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    return (response as any).data.listTodos; // Use type assertion to any for response object
  } catch (error) {
    // Handle error if necessary
    console.error(error);
    throw error; // Rethrow the error or handle it according to your requirements
  }
};

const useListTodosQuery = () => {
  return useQuery<ListTodosResponse, unknown>(["todos"], listTodos);
};

export default useListTodosQuery;
