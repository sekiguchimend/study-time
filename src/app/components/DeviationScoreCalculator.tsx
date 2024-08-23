"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from './DeviationScoreCalculator.module.css';

// 科目の型定義
type Subjects = '国語' | '数学' | '理科' | '社会' | '英語';

// 学年の型定義
type Grade = 1 | 2 | 3;

// 計算機コンポーネント
const DeviationScoreCalculator: React.FC = () => {
    // 状態管理
    const [currentGrade, setCurrentGrade] = useState<Grade>(2);
    const [weekdays, setWeekdays] = useState<{ [key in Subjects]: number }>({
        国語: 2,
        数学: 2,
        理科: 2,
        社会: 2,
        英語: 2,
    });
    const [weekends, setWeekends] = useState<{ [key in Subjects]: number }>({
        国語: 3,
        数学: 3,
        理科: 3,
        社会: 3,
        英語: 3,
    });
    const [previousScores, setPreviousScores] = useState<{ [key in Subjects]: number }>({
        国語: 50,
        数学: 50,
        理科: 50,
        社会: 50,
        英語: 50,
    });
    const [firstYearScores, setFirstYearScores] = useState<{ [key in Subjects]: number | null }>({
        国語: null,
        数学: null,
        理科: null,
        社会: null,
        英語: null,
    });
    const [results, setResults] = useState<{ [key in Subjects]: number | null }>({
        国語: null,
        数学: null,
        理科: null,
        社会: null,
        英語: null,
    });

    // 偏差値計算ロジック (仮の計算式)
    const calculateAdjustedDeviationScore = (
        grade: Grade,
        subject: Subjects,
        weekdayHours: number,
        weekendHours: number,
        previousScore: number,
        firstYearScore: number | null
    ): number => {
        // ここに実際の計算ロジックを記述する
        return (previousScore + weekdayHours + weekendHours + (firstYearScore ?? 0)) / 4;
    };

    // フォーム送信時の処理
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newResults: { [key in Subjects]: number } = {
            国語: calculateAdjustedDeviationScore(
                currentGrade,
                '国語',
                weekdays['国語'],
                weekends['国語'],
                previousScores['国語'],
                currentGrade === 3 ? firstYearScores['国語'] : null
            ),
            数学: calculateAdjustedDeviationScore(
                currentGrade,
                '数学',
                weekdays['数学'],
                weekends['数学'],
                previousScores['数学'],
                currentGrade === 3 ? firstYearScores['数学'] : null
            ),
            理科: calculateAdjustedDeviationScore(
                currentGrade,
                '理科',
                weekdays['理科'],
                weekends['理科'],
                previousScores['理科'],
                currentGrade === 3 ? firstYearScores['理科'] : null
            ),
            社会: calculateAdjustedDeviationScore(
                currentGrade,
                '社会',
                weekdays['社会'],
                weekends['社会'],
                previousScores['社会'],
                currentGrade === 3 ? firstYearScores['社会'] : null
            ),
            英語: calculateAdjustedDeviationScore(
                currentGrade,
                '英語',
                weekdays['英語'],
                weekends['英語'],
                previousScores['英語'],
                currentGrade === 3 ? firstYearScores['英語'] : null
            ),
        };
        setResults(newResults);
    };

    // 入力フォームの変更をハンドリング
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        subject: Subjects,
        type: 'weekday' | 'weekend' | 'previousScore' | 'firstYearScore'
    ) => {
        const value = Number(e.target.value);
        if (type === 'weekday') {
            setWeekdays({ ...weekdays, [subject]: value });
        } else if (type === 'weekend') {
            setWeekends({ ...weekends, [subject]: value });
        } else if (type === 'previousScore') {
            setPreviousScores({ ...previousScores, [subject]: value });
        } else if (type === 'firstYearScore') {
            setFirstYearScores({ ...firstYearScores, [subject]: value });
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>五教科偏差値計算機</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.gradeSelect}>
                    <label>
                        現在の学年:
                        <select 
                            value={currentGrade} 
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrentGrade(Number(e.target.value) as Grade)}
                        >
                            <option value={1}>高校1年生</option>
                            <option value={2}>高校2年生</option>
                            <option value={3}>高校3年生</option>
                        </select>
                    </label>
                </div>
                {(['国語', '数学', '理科', '社会', '英語'] as Subjects[]).map((subject) => (
                    <div key={subject} className={styles.subject}>
                        <h3 className={styles.subjectTitle}>{subject}</h3>
                        <div className={styles.subjectField}>
                            <label>
                                平日の勉強時間（時間）:
                                <input 
                                    type="number" 
                                    value={weekdays[subject]} 
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, subject, 'weekday')} 
                                />
                            </label>
                        </div>
                        <div className={styles.subjectField}>
                            <label>
                                休日の勉強時間（時間）:
                                <input 
                                    type="number" 
                                    value={weekends[subject]} 
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, subject, 'weekend')} 
                                />
                            </label>
                        </div>
                        <div className={styles.subjectField}>
                            <label>
                                前学年の偏差値:
                                <input 
                                    type="number" 
                                    value={previousScores[subject]} 
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, subject, 'previousScore')} 
                                    disabled={currentGrade === 1}
                                />
                            </label>
                        </div>
                        {currentGrade === 3 && (
                            <div className={styles.subjectField}>
                                <label>
                                    高校1年生時の偏差値:
                                    <input 
                                        type="number" 
                                        value={firstYearScores[subject] || ''} 
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, subject, 'firstYearScore')}
                                    />
                                </label>
                            </div>
                        )}
                    </div>
                ))}
                <button type="submit" className={styles.calculateButton}>計算する</button>
            </form>
            <div className={styles.results}>
                <h3>計算結果</h3>
                {(['国語', '数学', '理科', '社会', '英語'] as Subjects[]).map((subject) => (
                    <div key={subject} className={styles.result}>
                        {subject}: {results[subject] !== null ? results[subject] : '---'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeviationScoreCalculator;
