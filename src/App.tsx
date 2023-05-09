import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes/routes";
function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
