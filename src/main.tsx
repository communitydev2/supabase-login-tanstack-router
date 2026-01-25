import React from "react";
import ReactDOM from "react-dom/client";
import { TanStackRouterDevtoolsInProd } from '@tanstack/react-router-devtools'


const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const routeTree = rootRoute.addChildren([
  // ... other routes
])

const router = createRouter({
  routeTree,
})

function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
