import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, FolderGit2, Code, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
const token = import.meta.env.VITE_GITHUB_TOKEN;

const GitHubStats = () => {
  const [stats, setStats] = useState([
    { icon: GitCommit, value: "-", label: "Contribuições", description: "Commits nos últimos 12 meses" },
    { icon: FolderGit2, value: "-", label: "Projetos", description: "Repositórios ativos" },
    { icon: Code, value: "-", label: "Linhas de Código", description: "Linhas adicionadas/removidas" },
  ]);

  useEffect(() => {
    const query = `
      query {
        user(login: "ThalitaPereiraLA") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
          repositories(first: 100, privacy: PUBLIC) {
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
              languages(first: 10) {
                edges {
                  size
                }
              }
            }
          }
        }
      }
    `;

    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const user = data.data.user;

        // Total de contribuições do último ano
        const totalContributions = user.contributionsCollection.contributionCalendar.totalContributions;

        // Total de commits de todos os repositórios
        const totalCommits = user.repositories.nodes.reduce((sum, repo) => {
          if (repo.defaultBranchRef?.target?.history?.totalCount) {
            return sum + repo.defaultBranchRef.target.history.totalCount;
          }
          return sum;
        }, 0);

        // Total de "linhas de código" (somando tamanho das linguagens como aproximação)
        const totalLines = user.repositories.nodes.reduce((sum, repo) => {
          const repoSize = repo.languages.edges.reduce((s, lang) => s + lang.size, 0);
          return sum + repoSize;
        }, 0);

        setStats([
          {
            icon: GitCommit,
            value: totalContributions,
            label: "Contribuições",
            description: "Commits nos últimos 12 meses",
          },
          {
            icon: FolderGit2,
            value: user.repositories.nodes.length,
            label: "Projetos",
            description: "Repositórios públicos",
          },
          {
            icon: Code,
            value: totalLines.toLocaleString(),
            label: "Linhas de Código",
            description: "Linhas adicionadas/removidas",
          },
        ]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="github-stats" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Atividade no GitHub
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
            Últimos 12 Meses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Meu compromisso com código aberto e desenvolvimento contínuo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card-elevated rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <stat.icon size={28} className="text-primary" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full group"
            asChild
          >
            <a
              href="https://github.com/ThalitaPereiraLA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              Ver Perfil Completo
              <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
