'use client';
import { useState } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import styles from './Questions.module.css';
import TextBlock from '@/components/TextBlock';

const questions = [
  {
    question: 'How is usage measured?',
    answer: `Usage is measured by counting pageviews to a website plus any custom events or custom event properties stored. 
    Each website pageview counts as one event. If you save
    event properties, each data property stored counts as one event.`,
  },
  {
    question: '免费试用是如何进行的？',
    answer: `Umami Cloud 的免费试用将从购买之日起持续 14 天。试用版可让你完全访问该计划中的所有功能。在试用期结束时，你将收到常规金额的账单。你可以在试用期内随时免费取消试用。`,
  },
  {
    question: 'How will I be billed?',
    answer: `Billing occurs on a monthly basis and you can cancel at any time. 
    If you upgraded to a paid plan via a trial, your first invoice git checkout will arrive after your trial period ends.`,
  },
  {
    question: '你的服务器位于哪里？',
    answer: `Umami 云服务器位于美国和欧盟，并遵守 GDPR 和 CCPA 法规。`,
  },
  {
    question: '我可以导出我的数据吗？',
    answer: `是的，你的所有数据都可以从 Umami Cloud 导出。`,
  },
];

export default function Questions() {
  return (
    <>
      <TextBlock align="center">
        <h2>常见问题</h2>
      </TextBlock>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => {
          return (
            <Question key={question} question={question}>
              {answer}
            </Question>
          );
        })}
      </div>
    </>
  );
}

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.question} onClick={() => setExpanded(state => !state)}>
      <div className={styles.text} data-umami-event="faq-question-click">
        {question}
        <Icon className={styles.icon} rotate={expanded ? 90 : 0} size="sm">
          <Icons.Chevron />
        </Icon>
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
