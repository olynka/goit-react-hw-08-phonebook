import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from '../Navigation/Navigation';


export const Layout = () => {
    return (
        <>
      
                  <Navigation />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
}