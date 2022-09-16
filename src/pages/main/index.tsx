import React, { FC, useEffect, useState } from 'react'
import Paragraph from '../../components/paragraph';
import styles from './main.module.css';
import Timer from '../../components/timer';
import InputBox from '../../components/inputBox';
import { paragraphs } from '../../paragraphs';
import DifficultyLevel from '../../components/difficultyLevel';
import Duration from '../../components/duration';
import CreateSpanElements from '../../components/createSpanElements';

const Main : FC = () => {

    const [wordsPerMin, setWordsPerMin] = useState<number | undefined>();
    const [minutes, setMinutes] = useState<number>(1);
    const [incorrectEntry, setIncorrectEntry] = useState<number>(0);
    const [accuracy, setAccuracy] = useState<number>(0);


    // Function that computes result and sets result fields
    const computeResult = () => {
        const result = (inputVal.length / 5) / minutes;
        const percentage = (((inputVal.length - incorrectEntry) / inputVal.length) * 100).toFixed(2);
        setWordsPerMin(result);
        setAccuracy(parseFloat(percentage));
    }
    return (
        <div className={styles.container}>

        </div>
    )
}

export default Main;