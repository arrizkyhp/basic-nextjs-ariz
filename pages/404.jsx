import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div>
      <h1 className="not-found">404</h1>
      <h2 className="not-found">Cant find anything here</h2>
      <p className="not-found">Hold on, we getting you back....</p>
      <Link href="/">
        <a className="not-found-link" href="/">
          Go back
        </a>
      </Link>
    </div>
  );
}
