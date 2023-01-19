import Link from 'next/link';
import { Suspense } from 'react';
import DoSomething from './do-something';
import RepositoryList from './repository-list';

export default function Fetching() {
  return (
    <main>
      <Link href="/">Back to home</Link>
      <h2>Fetching</h2>

      <h3>Repositories</h3>
      <ul>
        <Suspense fallback={<div>Loading the long list of repositories ...</div>}>
          {/* @ts-expect-error Server Component */}
          <RepositoryList />
        </Suspense>
      </ul>

      <h3>Users</h3>
      <DoSomething />
    </main>
  );
}
