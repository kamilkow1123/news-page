import Nav from "./Nav";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </React.Fragment>
    );
};

export default Layout;
