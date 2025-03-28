'use client';
import { Button } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import { GITHUB_URL, DISCORD_URL, X_URL, LINKEDIN_URL } from '@/lib/constants';
import { Github, Discord, X, Linkedin } from '@/components/icons';
import styles from './CommunityPage.module.css';

const items = [
  {
    name: 'GitHub',
    description:
      'Check out the Umami source code, report issues, request features and join discussions.',
    url: GITHUB_URL,
    icon: <Github />,
  },
  {
    name: 'Discord',
    description: "Chat directly with developers and other users in Umami's Discord channel.",
    url: DISCORD_URL,
    icon: <Discord />,
  },
  {
    name: 'Twitter',
    description: 'Follow us on Twitter for the latest news and updates.',
    url: X_URL,
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    description: 'Learn about our company.',
    url: LINKEDIN_URL,
    icon: <Linkedin />,
  },
];

export default function CommunityPage() {
  return (
    <section>
      <PageHeader
        title="Community"
        description="Get help with issues, discuss ideas and share your feedback."
      />
      <div className={styles.items}>
        {items.map(({ name, description, url, icon }) => (
          <div key={name} className={styles.item}>
            <header>
              {icon} {name}
            </header>
            <p>{description}</p>
            <Button variant="secondary">
              <a href={url} target="_blank" data-umami-event={`community-${name}`}>
                Explore
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
