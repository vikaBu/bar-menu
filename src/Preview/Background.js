import React from "react";
import * as styles from "./Background.module.scss";

export const Background = ({width, height}) => {
    const midpoint = width / 2;
    return (
        <g>
            <RotatedSquare cx={midpoint} cy={height} size={400} className={styles.rotatedSquare1}/>
            <RotatedSquare cx={midpoint} cy={height - 300} size={300} className={styles.rotatedSquare2}/>
            <RotatedSquare cx={midpoint} cy={height - 250} size={400} className={styles.rotatedSquare3}/>
            <RotatedSquare cx={midpoint} cy={height - 600} size={200} className={styles.rotatedSquare4}/>

            <ReflectedSquares menuWidth={width} cx={midpoint - 250} cy={height - 100} size={200} className={styles.rotatedSquare1}/>
            <ReflectedSquares menuWidth={width} cx={midpoint - 550} cy={height - 100} size={350} className={styles.rotatedSquare2}/>
            <ReflectedSquares menuWidth={width} cx={midpoint - 660} cy={height} size={100} className={styles.rotatedSquare3}/>
            <ReflectedSquares menuWidth={width} cx={midpoint - 840} cy={height} size={280} className={styles.rotatedSquare1}/>
            <ReflectedSquares menuWidth={width} cx={0} cy={height} size={280} className={styles.rotatedSquare4}/>
            <ReflectedSquares menuWidth={width} cx={0} cy={height - 375} size={300} className={styles.rotatedSquare2}/>
            <ReflectedSquares menuWidth={width} cx={290} cy={height - 100} size={200} className={styles.rotatedSquare1}/>
            <ReflectedSquares menuWidth={width} cx={0} cy={height - 200} size={175} className={styles.rotatedSquare4}/>
            <ReflectedSquares menuWidth={width} cx={0} cy={height - 380} size={174} className={styles.rotatedSquare2}/>
            <ReflectedSquares menuWidth={width} cx={0} cy={height - 660} size={120} className={styles.rotatedSquare3}/>
        </g>
    );
};

const ReflectedSquares = ({menuWidth, cx, cy, size, className}) => {
    return (
        <g>
            <RotatedSquare cx={cx} cy={cy} size={size} className={className}/>
            <RotatedSquare cx={menuWidth - cx} cy={cy} size={size} className={className}/>
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