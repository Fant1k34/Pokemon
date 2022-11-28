import React from 'react';
import styles from "./SecondaryPanel.module.css";
import { cn } from "../api/common";

type props = {
    main: string;
    secondary: string;
    gender: "male" | "female";
    className?: string;
}

export const SecondaryPanel = ({ main, secondary, gender, className }: props) => {
    const isFemale = gender === 'female';

    return (
        <span className={cn(className, styles.Property, isFemale && styles.Property_female)}>
            <span className={cn(styles.Property__name, isFemale && styles.Property__name_female)}>{ main }</span>
            <span className={styles.Property__value}>{ secondary }</span>
        </span>
    );
};
