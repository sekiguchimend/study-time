"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import './styles.css';

type Grade = 1 | 2 | 3;
type Subjects = '国語' | '数学' | '理科' | '社会' | '英語';
type TimeInput = {
  hours: number;
  minutes: number;
};

const calculateAdjustedDeviationScore = (
    currentGrade: Grade,
    subject: Subjects,
    weekdayTime: TimeInput,
    weekendTime: TimeInput,
    previousScore: number
): number => {
    const baseDeviationScore = (grade: Grade, subject: Subjects, weekdayTime: TimeInput, weekendTime: TimeInput): number => {
        const avgWeekday: { [key in Grade]: { [key in Subjects]: number } } = {
            1: { 国語: 15, 数学: 30, 理科: 0, 社会: 0, 英語: 15 },
            2: { 国語: 10, 数学: 6, 理科: 5, 社会: 5, 英語: 25 },
            3: { 国語: 20, 数学: 90, 理科: 20, 社会: 20, 英語: 90 },
        };

        const avgWeekend: { [key in Grade]: { [key in Subjects]: number } } = {
            1: { 国語: 15, 数学: 60, 理科: 0, 社会: 0, 英語: 45 },
            2: { 国語: 15, 数学: 120, 理科: 20, 社会: 20, 英語: 65 },
            3: { 国語: 60, 数学: 120, 理科: 60, 社会: 60, 英語: 120 },
        };

        const stdDev: { [key in Grade]: number } = { 1: 50, 2: 65, 3: 80 };
        
        const avgDaily = (avgWeekday[grade][subject] * 5 + avgWeekend[grade][subject] * 2) / 7;
        const personalDaily = ((weekdayTime.hours * 60 + weekdayTime.minutes) * 5 + (weekendTime.hours * 60 + weekendTime.minutes) * 2) / 7;
        
        return 50 + 10 * (personalDaily - avgDaily) / stdDev[grade];
    };

    const currentBaseScore = baseDeviationScore(currentGrade, subject, weekdayTime, weekendTime);
    let adjustment = (currentBaseScore - previousScore) * 0.3;
    
    const finalScore = Math.max(30, Math.min(80, currentBaseScore - adjustment));
    return Math.round(finalScore * 100) / 100;
};

const DeviationScoreCalculator: React.FC = () => {
    const [currentGrade, setCurrentGrade] = useState<Grade>(2);
    const [weekdays, setWeekdays] = useState<{ [key in Subjects]: TimeInput }>({
        国語: { hours: 2, minutes: 0 },
        数学: { hours: 2, minutes: 0 },
        理科: { hours: 2, minutes: 0 },
        社会: { hours: 2, minutes: 0 },
        英語: { hours: 2, minutes: 0 },
    });
    const [weekends, setWeekends] = useState<{ [key in Subjects]: TimeInput }>({
        国語: { hours: 3, minutes: 0 },
        数学: { hours: 3, minutes: 0 },
        理科: { hours: 3, minutes: 0 },
        社会: { hours: 3, minutes: 0 },
        英語: { hours: 3, minutes: 0 },
    });
    const [previousScores, setPreviousScores] = useState<{ [key in Subjects]: number }>({
        国語: 50,
        数学: 50,
        理科: 50,
        社会: 50,
        英語: 50,
    });
    const [results, setResults] = useState<{ [key in Subjects]: number | null }>({
        国語: null,
        数学: null,
        理科: null,
        社会: null,
        英語: null,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newResults: { [key in Subjects]: number } = {
            国語: calculateAdjustedDeviationScore(currentGrade, '国語', weekdays['国語'], weekends['国語'], previousScores['国語']),
            数学: calculateAdjustedDeviationScore(currentGrade, '数学', weekdays['数学'], weekends['数学'], previousScores['数学']),
            理科: calculateAdjustedDeviationScore(currentGrade, '理科', weekdays['理科'], weekends['理科'], previousScores['理科']),
            社会: calculateAdjustedDeviationScore(currentGrade, '社会', weekdays['社会'], weekends['社会'], previousScores['社会']),
            英語: calculateAdjustedDeviationScore(currentGrade, '英語', weekdays['英語'], weekends['英語'], previousScores['英語']),
        };
        setResults(newResults);
    };

    const validateTime = (hours: number, minutes: number): boolean => {
        return hours >= 0 && minutes >= 0 && minutes < 60 && hours * 60 + minutes <= 24 * 60;
    };

    const handleTimeInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        subject: Subjects,
        type: 'weekday' | 'weekend',
        field: 'hours' | 'minutes'
    ) => {
        const value = Number(e.target.value);
        const currentTime = type === 'weekday' ? weekdays[subject] : weekends[subject];
        const newTime = { ...currentTime, [field]: value };
        
        if (validateTime(newTime.hours, newTime.minutes)) {
            if (type === 'weekday') {
                setWeekdays({ ...weekdays, [subject]: newTime });
            } else {
                setWeekends({ ...weekends, [subject]: newTime });
            }
        }
    };

    const handlePreviousScoreChange = (e: ChangeEvent<HTMLInputElement>, subject: Subjects) => {
        const value = Number(e.target.value);
        setPreviousScores({ ...previousScores, [subject]: value });
    };

    return (
        <div className="container">
            <h2 className="title">未来の偏差値計算機</h2>
            <form className="form" onSubmit={handleSubmit}>
                <select 
                    className="select"
                    value={currentGrade} 
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrentGrade(Number(e.target.value) as Grade)}
                >
                    <option value={1}>高校1年生</option>
                    <option value={2}>高校2年生</option>
                    <option value={3}>高校3年生</option>
                </select>
                {(['国語', '数学', '理科', '社会', '英語'] as Subjects[]).map((subject) => (
                    <div className="subject-section" key={subject}>
                        <h3 className="subject-title">{subject}</h3>
                        <div className="input-group">
                            <label className="label">平日の一日の勉強時間：</label>
                            <input 
                                className="time-input"
                                type="number" 
                                value={weekdays[subject].hours} 
                                onChange={(e) => handleTimeInputChange(e, subject, 'weekday', 'hours')} 
                                min="0"
                                max="24"
                            />
                            時間
                            <input 
                                className="time-input"
                                type="number" 
                                value={weekdays[subject].minutes} 
                                onChange={(e) => handleTimeInputChange(e, subject, 'weekday', 'minutes')} 
                                min="0"
                                max="59"
                            />
                            分
                        </div>
                        <div className="input-group">
                            <label className="label">休日の一日の勉強時間：</label>
                            <input 
                                className="time-input"
                                type="number" 
                                value={weekends[subject].hours} 
                                onChange={(e) => handleTimeInputChange(e, subject, 'weekend', 'hours')} 
                                min="0"
                                max="24"
                            />
                            時間
                            <input 
                                className="time-input"
                                type="number" 
                                value={weekends[subject].minutes} 
                                onChange={(e) => handleTimeInputChange(e, subject, 'weekend', 'minutes')} 
                                min="0"
                                max="59"
                            />
                            分
                        </div>
                        <div className="input-group">
                            <label className="label">現在の偏差値:</label>
                            <input 
                                className="score-input"
                                type="number" 
                                value={previousScores[subject]} 
                                onChange={(e) => handlePreviousScoreChange(e, subject)} 
                                disabled={currentGrade === 1}
                                min="0"
                                max="100"
                            />
                        </div>
                    </div>
                ))}
                <button className="submit-button" type="submit">計算</button>
            </form>
            {results['国語'] !== null && (
                <div className="result-section">
                    <h3 className="result-title">結果</h3>
                    {(['国語', '数学', '理科', '社会', '英語'] as Subjects[]).map((subject) => (
                        <p className="result-item" key={subject}>{subject}: 調整後の偏差値: {results[subject]}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DeviationScoreCalculator;