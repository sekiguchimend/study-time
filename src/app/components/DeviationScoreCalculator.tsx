"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';

type Grade = 1 | 2 | 3;

const calculateAdjustedDeviationScore = (
    currentGrade: Grade,
    weekdayHours: number,
    weekendHours: number,
    previousScore: number,
    firstYearScore: number | null = null
): number => {
    const baseDeviationScore = (grade: Grade, weekdayHours: number, weekendHours: number): number => {
        const avgWeekday: { [key in Grade]: number } = { 1: 60, 2: 105, 3: 240 };
        const avgWeekend: { [key in Grade]: number } = { 1: 120, 2: 240, 3: 420 };
        const stdDev: { [key in Grade]: number } = { 1: 50, 2: 65, 3: 80 };
        
        const avgDaily = (avgWeekday[grade] * 5 + avgWeekend[grade] * 2) / 7;
        const personalDaily = (weekdayHours * 60 * 5 + weekendHours * 60 * 2) / 7;
        
        return 50 + 10 * (personalDaily - avgDaily) / stdDev[grade];
    };

    const currentBaseScore = baseDeviationScore(currentGrade, weekdayHours, weekendHours);
    let adjustment = (currentBaseScore - previousScore) * 0.3;
    
    if (currentGrade === 3 && firstYearScore !== null) {
        const longTermAdjustment = (currentBaseScore - firstYearScore) * 0.1;
        adjustment += longTermAdjustment;
    }
    
    const finalScore = Math.max(30, Math.min(80, currentBaseScore - adjustment));
    return Math.round(finalScore * 100) / 100;
};

const DeviationScoreCalculator: React.FC = () => {
    const [currentGrade, setCurrentGrade] = useState<Grade>(2);
    const [weekdayHours, setWeekdayHours] = useState<number>(2);
    const [weekendHours, setWeekendHours] = useState<number>(8);
    const [previousScore, setPreviousScore] = useState<number>(50);
    const [firstYearScore, setFirstYearScore] = useState<number | null>(null);
    const [result, setResult] = useState<number | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const score = calculateAdjustedDeviationScore(
            currentGrade,
            weekdayHours,
            weekendHours,
            previousScore,
            currentGrade === 3 ? firstYearScore : null
        );
        setResult(score);
    };

    return (
        <div>
            <h2>偏差値計算機</h2>
            <form onSubmit={handleSubmit}>
                <div>
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
                <div>
                    <label>
                        平日の勉強時間（時間）:
                        <input 
                            type="number" 
                            value={weekdayHours} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeekdayHours(Number(e.target.value))} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        休日の勉強時間（時間）:
                        <input 
                            type="number" 
                            value={weekendHours} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setWeekendHours(Number(e.target.value))} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        前学年の偏差値:
                        <input 
                            type="number" 
                            value={previousScore} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPreviousScore(Number(e.target.value))} 
                            disabled={currentGrade === 1}
                        />
                    </label>
                </div>
                {currentGrade === 3 && (
                    <div>
                        <label>
                            高校1年生時の偏差値:
                            <input 
                                type="number" 
                                value={firstYearScore || ''} 
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstYearScore(Number(e.target.value))} 
                            />
                        </label>
                    </div>
                )}
                <button type="submit">計算</button>
            </form>
            {result !== null && (
                <div>
                    <h3>結果</h3>
                    <p>調整後の偏差値: {result}</p>
                </div>
            )}
        </div>
    );
};

export default DeviationScoreCalculator;
