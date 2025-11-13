import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TraceField - Solutions digitales sur-mesure';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #DC2626, #991B1B)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          TraceField
        </div>
        <div
          style={{
            fontSize: 40,
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Solutions digitales sur-mesure pour artisans et PME
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
