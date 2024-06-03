'use client';
import { useState } from 'react';
import { Radio, RadioGroup, Dropdown, Item } from 'react-basics';
import classNames from 'classnames';
import styles from './Calculator.module.css';

const tiers = [
  { price: 0, events: '10K' },
  { price: 9, events: '100K' },
  { price: 19, events: '250K' },
  { price: 29, events: '500K' },
  { price: 49, events: '1M' },
  { price: 99, events: '2.5M' },
  { price: 189, events: '5M' },
  { price: 369, events: '10M' },
  { price: 729, events: '20M' },
  { price: null, events: '20M+' },
];

export default function Calculator() {
  const [tier, setTier] = useState(1);
  const [billing, setBilling] = useState('Monthly');
  const selected = tiers[tier];
  const isAnnual = billing === 'Annual';

  const handleBillingSelect = value => {
    setBilling(value);
  };

  const handleTierSelect = value => {
    setTier(value);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.body}>
        <h1>专业计划定价</h1>
        <div className={styles.billing}>
          <RadioGroup
            className={styles.radio}
            name="billing"
            items={['月度', '年度']}
            selectedKey={billing}
            onSelect={handleBillingSelect}
            layout="horizontal"
          >
            {item => {
              return <Radio key={item}>{item}</Radio>;
            }}
          </RadioGroup>
          {isAnnual && <div className={styles.tag}>20% 节省</div>}
        </div>
        <div className={styles.slider}>
          <input
            className={styles.range}
            type="range"
            min="0"
            max={tiers.length - 1}
            value={tier}
            onChange={e => handleTierSelect(e.target.value)}
          />
          <div className={styles.ticks}>
            {tiers.map(({ events }, index) => (
              <div
                key={index}
                className={classNames(styles.tick, { [styles.selected]: +tier === index })}
                onClick={() => handleTierSelect(index)}
              >
                {events}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.select}>
          <h3>Monthly events</h3>
          <Dropdown
            className={styles.dropdown}
            items={tiers}
            value={tiers[tier].events}
            onChange={key => handleTierSelect(key)}
          >
            {({ events }, index) => <Item key={index}>{events}</Item>}
          </Dropdown>
        </div>
        <div className={styles.result}>
          <div className={styles.events}>
            最多 <strong>{selected.events}</strong> 活动 / 月
          </div>
          <div className={styles.price}>
            {isAnnual && selected.price !== null && (
              <span className={styles.strike}>{`$${(selected.price * 12).toLocaleString()}`}</span>
            )}
            <strong>
              {selected.price !== null
                ? `$${Math.floor(selected.price * (isAnnual ? 12 * 0.8 : 1)).toLocaleString()}`
                : '联系我们'}
            </strong>
            {selected.price !== null && <span>{` / ${isAnnual ? '年' : '月'}`}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
