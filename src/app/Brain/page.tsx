"use client";
import { useState, FormEvent } from 'react';
import styles from './Brain.module.css';
import Header from '../components/Header';

// エビングハウスの忘却曲線に基づく計算関数
const calculateRetention = (initialWords: number, hours: number, memoryLevel: string): number => {
  const retentionRates: { [key: string]: number } = {
    low: 0.3,
    medium: 0.5,
    high: 0.7
  };

  const initialRetentionRate = retentionRates[memoryLevel];
  const k = 0.1; // 忘却速度定数（調整が可能）
  const adjustedRetentionRate = initialRetentionRate * Math.exp(-k * (hours / 24));
  
  return Math.round(initialWords * Math.max(adjustedRetentionRate, 0));
};

const BrainPage = () => {
  const [initialWords, setInitialWords] = useState<number | ''>('');
  const [hours, setHours] = useState<number | ''>('');
  const [memoryLevel, setMemoryLevel] = useState<string>('medium');
  const [retainedWords, setRetainedWords] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = calculateRetention(
      initialWords === '' ? 0 : initialWords,
      hours === '' ? 1 : hours,
      memoryLevel
    );
    setRetainedWords(result);
  };

  return (
    <>
      <Header />
      <div className={styles.spacer}></div> {/* 新しく追加 */}

      <div className={styles.container}>
        <h1 className={styles.h1}>最低限の努力で単語テストクリア</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>
              今日覚えた単語数:
              <input
                type="number"
                value={initialWords}
                onChange={(e) => setInitialWords(Number(e.target.value))}
                placeholder="0"
                min="0"
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              テストまでの時間（時間単位）:
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                placeholder="1"
                min="1"
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              暗記力のレベル:
              <select
                value={memoryLevel}
                onChange={(e) => setMemoryLevel(e.target.value)}
                className={styles.select}
              >
                <option value="low">低い</option>
                <option value="medium">中程度</option>
                <option value="high">高い</option>
              </select>
            </label>
          </div>
          <button type="submit" className={styles.button}>計算する</button>
        </form>
        {retainedWords !== null && (
          <div className={styles.result}>
            <h2>テストまでに覚えている単語数: {retainedWords}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default BrainPage;
