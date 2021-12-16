import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepoositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const API_URL = "https://api.github.com/users/hernanytec/repos";
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(API_URL).then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
