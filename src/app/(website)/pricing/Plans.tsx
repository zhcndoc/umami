'use client';
import { Button } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import Link from 'next/link';
import styles from './Plans.module.css';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function Plans() {
  const query = useQueryString({ ref: 'umami-pricing' });

  const plans = [
    {
      name: '爱好',
      price: (
        <>
          <strong>$0</strong> / 月
        </>
      ),
      description: '每月高达 10,000 个活动',
      features: ['多达 3 个网站', '1 年数据保留', '社区支持'],
      url: `${CLOUD_URL}/signup${query}&plan=hobby`,
      button: '开始',
    },
    {
      name: '专业',
      price: (
        <>
          <strong>$9</strong> / 月起
        </>
      ),
      description: '基于使用量的简单定价',
      features: ['无限的网站', '无限的团队成员', '5 年数据保留', '电子邮件支持'],
      url: `${CLOUD_URL}/signup${query}&plan=pro`,
      button: '尝试 14 天免费试用',
    },
    {
      name: '企业',
      price: <strong>自定义</strong>,
      description: '为您的业务量身定制',
      features: [
        '无限的网站',
        '无限的团队成员',
        '自定义数据保留',
        '顾客引导支持',
        '指定支持工程师',
      ],
      url: 'mailto:sales@umami.is?subject=Umami Cloud enterprise pricing',
      button: '联系我们',
    },
  ];

  return (
    <div className={styles.plans}>
      {plans.map(({ name, price, description, features, url, button }) => {
        return (
          <div key={name} className={styles.plan}>
            <div>
              <div className={styles.title}>{name}</div>
              <div className={styles.price}>{price}</div>
              <div className={styles.description}>{description}</div>
              <ul>
                {features.map((feat, index) => {
                  return (
                    <li key={index}>
                      <Checkmark /> {feat}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.button}>
              <Link href={url}>
                <Button variant="secondary">{button}</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
