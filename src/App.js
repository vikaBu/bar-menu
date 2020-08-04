import React from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings} from "./Settings/Settings";

export const App = () => {
  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview/>
        <Settings/>
    </main>
  );
};