import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsInProd } from '@tanstack/react-router-devtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from './Header'
import { MantineProvider} from "@mantine/core";
if(process.env.NODE_ENV === 'production'){
  <TanStackRouterDevtoolsInProd/>
}




const RootLayout =() => {
  return(

    <>
  <MantineProvider theme={{  }}>
   <Header/>
    <Outlet />
     </MantineProvider>
    <TanStackRouterDevtools />
  </>
  )
}

export const Route = createRootRoute({ component: RootLayout })