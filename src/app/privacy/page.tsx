'use client';
import Privacy from './privacy-policy.mdx';
import PageHeader from 'components/layout/PageHeader';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader>
        <h1>Privacy Policy</h1>
      </PageHeader>
      <Privacy />
    </>
  );
}