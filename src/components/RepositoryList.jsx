import { RepositoryItem } from "./RepoositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "react",
  description: "forms",
  link: "https://reactjs.com",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
