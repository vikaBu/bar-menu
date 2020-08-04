import React from "react";
import * as styles from "./Preview.module.scss";

const width = 2970;
const height = 2100;
const midpoint = width/2;
const menuWidth = 700;
const barMenuStart = width/4 - menuWidth/2;
const cocktailMenuStart = width*3/4 - menuWidth/2;

export const Preview = () => {
    return (
        <section>
            <h2>Preview</h2>
            <svg className={styles.menu} viewBox={`0, 0, ${width}, ${height}`}>
                <RotatedSquare cx={midpoint} cy={height} size={400} className={styles.rotatedSquare1}/>
                <RotatedSquare cx={midpoint} cy={height - 300} size={300} className={styles.rotatedSquare2}/>
                <RotatedSquare cx={midpoint} cy={height - 250} size={400} className={styles.rotatedSquare3}/>
                <RotatedSquare cx={midpoint} cy={height - 600} size={200} className={styles.rotatedSquare4}/>
                
                <ReflectedSquares cx={midpoint - 250} cy={height - 100} size={200} className={styles.rotatedSquare1}/>
                <ReflectedSquares cx={midpoint - 550} cy={height - 100} size={350} className={styles.rotatedSquare2}/>
                <ReflectedSquares cx={midpoint - 660} cy={height} size={100} className={styles.rotatedSquare3}/>
                <ReflectedSquares cx={midpoint - 840} cy={height} size={280} className={styles.rotatedSquare1}/>
                <ReflectedSquares cx={0} cy={height} size={280} className={styles.rotatedSquare4}/>
                <ReflectedSquares cx={0} cy={height - 375} size={300} className={styles.rotatedSquare2}/>
                <ReflectedSquares cx={290} cy={height - 100} size={200} className={styles.rotatedSquare1}/>
                <ReflectedSquares cx={0} cy={height - 200} size={175} className={styles.rotatedSquare4}/>
                <ReflectedSquares cx={0} cy={height - 380} size={174} className={styles.rotatedSquare2}/>
                <ReflectedSquares cx={0} cy={height - 660} size={120} className={styles.rotatedSquare3}/>

                <text textAnchor="middle" x={midpoint} y={200} className={styles.title}>Mike's Cocktail Bar</text>
                
                <g transform={`translate(${barMenuStart}, 500)`}>
                    <text textAnchor={"middle"} x={menuWidth/2} y={0} className={styles.subtitle}>Bar Menu</text>
                    <MenuItem y={150} name="Garlic Bread" price={5} description={"Tomato Sauce, Garlic"}/>
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

const ReflectedSquares = ({cx, cy, size, className}) => {
    return (
        <g>
            <RotatedSquare cx={cx} cy={cy} size={size} className={className}/>
            <RotatedSquare cx={width - cx} cy={cy} size={size} className={className}/>
        </g>
    );
};

const RotatedSquare = ({cx, cy, size, className}) => {
    const x1 = cx - size;
    const y1 = cy;
    
    const x2 = cx;
    const y2 = cy + size;

    const x3 = cx + size;
    const y3 = cy;

    const x4 = cx;
    const y4 = cy - size;

    return (
        <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`} className={className}/>
    );    
};

const MenuItem = ({y, name, price, description, descriptionLine2}) => {
    return (
        <g>
            <text textAnchor={"start"} x={0} y={y} className={styles.menuItem}>{name}</text>
            <text textAnchor={"end"} x={menuWidth} y={y} className={styles.menuItem}>£{price}</text>
            <text textAnchor={"start"} x={0} y={y + 60} className={styles.description}>{description}</text>
            <text textAnchor={"start"} x={0} y={y + 100} className={styles.description}>{descriptionLine2}</text>
        </g>
    );
};