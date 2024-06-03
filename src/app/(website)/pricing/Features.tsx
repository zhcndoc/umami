'use client';
import { Fragment } from 'react';
import { Icon } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import styles from './Features.module.css';

const features = [
  {
    label: '数据',
    items: [['摄取（包括）', '10K', '100K to 20M', 'Custom']],
  },
  {
    label: '分析',
    items: [
      ['网站', '最多 3 个', '无限制', '无限制'],
      ['团队', false, true, true],
      ['自定义事件', true, true, true],
      ['自定义数据', true, true, true],
      ['API 访问', false, true, true],
    ],
  },
  {
    label: '监视',
    items: [
      ['实时事件', true, true, true],
      ['自定义仪表板', true, true, true],
      ['电子邮件提醒', false, false, true],
    ],
  },
  {
    label: '支持',
    items: [
      ['社区支持', true, true, true],
      ['电子邮件支持', false, true, true],
      ['正常运行时间 SLA', false, false, true],
      ['顾客引导支持', false, false, true],
      ['指定支持工程师', false, false, true],
    ],
  },
];

export default function Features() {
  return (
    <div className={styles.features}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>爱好</th>
            <th>专业</th>
            <th>企业</th>
          </tr>
        </thead>
        <tbody>
          {features.map(({ label, items }) => {
            return (
              <Fragment key={label}>
                <tr>
                  <td className={styles.header}>
                    <h2>{label}</h2>
                  </td>
                </tr>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      {item.map((data, x) => {
                        return (
                          <td key={x}>
                            {data === true ? (
                              <Icon size="xl">
                                <Checkmark />
                              </Icon>
                            ) : (
                              data
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
