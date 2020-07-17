import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
