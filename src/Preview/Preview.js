import React from "react";
import * as styles from "./Preview.module.scss";
import {Background} from "./Background";

const width = 2970;
const height = 2100;
const midpoint = width/2;
const menuWidth = 700;
const barMenuStart = width/4 - menuWidth/2;
const cocktailMenuStart = width*3/4 - menuWidth/2;

export const Preview = ({selectedTitle, selectedItem}) => {
    
    return (
        <section>
            <h2>Preview</h2>
            <svg className={styles.menu} viewBox={`0, 0, ${width}, ${height}`}>
                <Background width={width} height={height}/>

    <text textAnchor="middle" x={midpoint} y={200} className={styles.title} > {selectedTitle}</text>
                
                <g transform={`translate(${barMenuStart}, 500)`}>
                    <text textAnchor={"middle"} x={menuWidth/2} y={0} className={styles.subtitle}>Bar Menu</text>
                    <MenuItem y={150} name= {selectedItem} price={5} description={"Tomato Sauce, Garlic"}/>
                    <MenuItem y={350} name="Margherita" price={8} description={"Tomato Sauce and mozzarella"}/>
                    <MenuItem y={550} name="Caprino" price={10} description={"Goat's cheese, asparagus and parmesan"}/>
                    <MenuItem y={750} name="Hawaiian" price={9} description={"Ham and pineapple"}/>
                    <MenuItem y={950} name="Pancetta" price={11} description={"Roasted Peppers, onion and pancetta"}/>
                </g>

                <g transform={`translate(${cocktailMenuStart}, 500)`}>
                    <text textAnchor={"middle"} x={menuWidth/2} y={0} className={styles.subtitle}>Cocktail Menu</text>
                    <MenuItem y={150} name="Margarita" price={9} description={"Tequila, Cointreau, gomme"} descriptionLine2={"and lime juice."}/>
                    <MenuItem y={400} name="Caipirhna" price={9} description={"Cachaça, sugar and fresh lime"}/>
                    <MenuItem y={600} name="Stawberry Daiquiri" price={9} description={"Bacardi Carta Oro, Fraise des Bois,"} descriptionLine2={"lime juice and strawberry puree."}/>
                    <MenuItem y={850} name="Cosmopolitan" price={9} description={"Vodka, Cointreau, cranberry"} descriptionLine2={"juice, gomme and lime juice."}/>
                </g>
            </svg>
        </section>
    );
};

export const MenuItem = ({y, name, price, description, descriptionLine2}) => {
    return (
        <g>
            <text textAnchor={"start"} x={0} y={y} className={styles.menuItem}>{name}</text>
            <text textAnchor={"end"} x={menuWidth} y={y} className={styles.menuItem}>£{price}</text>
            <text textAnchor={"start"} x={0} y={y + 60} className={styles.description}>{description}</text>
            <text textAnchor={"start"} x={0} y={y + 100} className={styles.description}>{descriptionLine2}</text>
        </g>
    );
};