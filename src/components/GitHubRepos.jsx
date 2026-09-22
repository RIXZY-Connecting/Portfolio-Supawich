import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const langColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  "C#": "#239120",
  PHP: "#777BB4",
  Java: "#B07219",
  Vue: "#4FC08D",
  SCSS: "#C6538C",
};

const GitHubRepos = ({ reposConfig }) => {
  const { strings } = useLanguage();
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${reposConfig.gitHubUsername}/repos?sort=updated&per_page=${reposConfig.reposLength || 4}`
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setRepoList(data);
      }
    } catch (err) {
      console.warn("GitHub API fetch fallback:", err.message);
      // Fallback dummy items if rate-limited or offline
      setRepoList([
        {
          id: 1,
          name: "Portfolio-Supawich",
          description: "Personal developer portfolio built with React and modern UI tokens.",
          language: "JavaScript",
          stargazers_count: 2,
          forks_count: 0,
          html_url: `https://github.com/${reposConfig.gitHubUsername}/Portfolio-Supawich`,
        },
        {
          id: 2,
          name: "react-exam-system",
          description: "Online quiz & examination client interface with real-time feedback.",
          language: "JavaScript",
          stargazers_count: 1,
          forks_count: 0,
          html_url: `https://github.com/${reposConfig.gitHubUsername}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [reposConfig]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  if (!reposConfig.show) return null;

  return (
    <motion.div
      className="bento-card card-col-12"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header-clean">
        <div className="card-title-group">
          <span className="card-icon-badge">
            <Github size={18} />
          </span>
          <h2 className="card-title">{strings.repos?.title || "GitHub Repositories"}</h2>
        </div>
        <a
          href={`https://github.com/${reposConfig.gitHubUsername}`}
          target="_blank"
          rel="noreferrer noopener"
          className="card-badge"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent)' }}
        >
          <span>@{reposConfig.gitHubUsername}</span>
          <ExternalLink size={11} />
        </a>
      </div>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
          {[1, 2].map((n) => (
            <div key={n} style={{ height: 110, borderRadius: 'var(--radius-md)', background: 'var(--bg-surface-raised)', opacity: 0.6 }} />
          ))}
        </div>
      ) : (
        <div className="repos-container">
          {repoList.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="repo-mini-card"
            >
              <div className="repo-name-row">
                <span className="repo-name">{repo.name}</span>
                <ExternalLink size={13} style={{ color: 'var(--text-muted)' }} />
              </div>
              <p className="repo-desc">{repo.description || "No description provided."}</p>
              <div className="repo-meta">
                {repo.language && (
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span
                      className="repo-lang-dot"
                      style={{ background: langColors[repo.language] || "var(--accent)" }}
                    />
                    {repo.language}
                  </span>
                )}
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Star size={13} />
                  {repo.stargazers_count || 0}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <GitFork size={13} />
                  {repo.forks_count || 0}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default GitHubRepos;

