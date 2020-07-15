import Header from '../header/header';
import Footer from '../footer/footer';
import React from "react";

function Layout ({children}) {
    return <div>
        <Header />

        <main>
            {children}
        </main>

        <Footer />
    </div>
}

export default Layout
