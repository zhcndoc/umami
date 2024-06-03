'use client';
import { useState } from 'react';
import { Icon, Icons } from 'react-basics';
import SectionHeader from 'components/layout/SectionHeader';
import styles from './Questions.module.css';

const questions = [
  {
    question: 'Umami Cloud 有免费套餐吗？',
    answer: `是的！Umami Cloud 的爱好计划是完全免费的，非常适合个人项目和低流量网站。`,
  },
  {
    question: '免费试用是如何进行的？',
    answer: `Umami Cloud 的免费试用将从购买之日起持续 14 天。试用版可让您完全访问该计划中的所有功能。在试用期结束时，您将收到常规金额的账单。您可以在试用期内随时免费取消试用。`,
  },
  {
    question: '我将如何收到账单？',
    answer: `按月或按年计费。如果您通过试用升级到付费计划，您的第一张发票将在试用期结束后到达。`,
  },
  {
    question: '我的使用量如何计算？',
    answer: `使用量通过对网站的点击次数以及存储的任何自定义事件或自定义事件数据进行计算。每个网站访问都算作一个事件。如果您保存了事件数据，每个存储的数据属性也都会被视为一个事件。`,
  },
  {
    question: '您的服务器位于哪里？',
    answer: `Umami 云服务器位于美国和欧盟，并遵守 GDPR 和 CCPA 法规。`,
  },
  {
    question: '我可以导出我的数据吗？',
    answer: `是的，您的所有数据都可以从 Umami Cloud 导出。`,
  },
];

export default function Questions() {
  return (
    <>
      <SectionHeader>
        <h1>常见问题</h1>
      </SectionHeader>
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
      <div>
        <Icon className={styles.icon} rotate={expanded ? 0 : -90}>
          <Icons.ChevronDown />
        </Icon>
        {question}
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
