import React from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";

export const App = () => {
  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <div className={styles.content}>
            <Settings/>
            <Preview/>
        </div>
    </main>
  );
};

const Settings = () => {
    return (
        <section>
            <h2>Settings</h2>
        </section>
    );
};