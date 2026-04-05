'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught by Error Boundary:", error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', background: 'black', color: 'red', minHeight: '100vh', direction: 'ltr' }}>
      <h2>Something went wrong!</h2>
      <pre style={{ color: 'white', whiteSpace: 'pre-wrap', background: '#222', padding: '1rem' }}>
        {error.message}
      </pre>
      <pre style={{ color: 'yellow', whiteSpace: 'pre-wrap', background: '#222', padding: '1rem', marginTop: '1rem' }}>
        {error.stack}
      </pre>
      <button onClick={() => reset()} style={{ padding: '1rem', background: 'white', color: 'black', marginTop: '1rem' }}>
        Try again
      </button>
    </div>
  );
}
