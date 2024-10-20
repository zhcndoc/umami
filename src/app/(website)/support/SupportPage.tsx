'use client';
import PageHeader from '@/components/PageHeader';

export default function SupportPage() {
  return (
    <section>
      <PageHeader>
        <h1>Support</h1>
        <p>Support services available for Umami Cloud</p>
      </PageHeader>
      <div style={{ textAlign: 'center' }}>
        <h2>
          <a href="mailto:support@umami.is">support@umami.is</a>
        </h2>
      </div>
    </section>
  );
}
