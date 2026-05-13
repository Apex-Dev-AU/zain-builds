import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = siteConfig.name;

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundColor: '#0A0A0A',
          color: '#EDEDED',
          fontFamily: 'sans-serif',
          padding: '80px',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #1F1F23 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#00DC82',
              boxShadow: '0 0 12px rgba(0, 220, 130, 0.6)',
            }}
          />
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 22,
              color: '#A0A0A8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {siteConfig.name.toLowerCase()}
          </div>
        </div>

        <div
          style={{
            fontSize: 64,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 600,
            maxWidth: '900px',
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontFamily: 'monospace',
            fontSize: 20,
            color: '#666670',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderTop: '1px solid #1F1F23',
            paddingTop: 24,
          }}
        >
          <span>{siteConfig.author}</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, '')}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
