import React from "react";
import Header from "@/components/shared/header/Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="font-montserrat-medium mt-6">
            <Header></Header>
            <main>
                { children }
            </main>
            {/*<Footer></Footer>*/}
        </div>
    )
}

export default Layout;