async function getRepositories() {
  const res = await fetch('https://api.github.com/users/dominique-mueller/repos', { cache: 'no-store' });
  const repositories = await res.json();

  return repositories;
}

export default async function RepositoryList() {
  const repositories = await getRepositories();

  return (
    <ul>
      {repositories.map((repository: any) => (
        <li key={repository.name}>{repository.name}</li>
      ))}
    </ul>
  );
}
