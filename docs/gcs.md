**Projeto:** Shortz App (TDD-N2)  
**Repositório:** https://github.com/MatheusJaningDev/TDD-N2  
**Autor:** Matheus Janing  
**Versão:** 1.0  
**Data:** 16/11/2026  

---

## 1. Introdução

### 1.1 Finalidade
Este documento define as práticas de **Gestão de Configuração de Software (GCS)** adotadas no projeto Shortz App, com o objetivo de garantir a integridade, rastreabilidade e controle das mudanças durante o ciclo de desenvolvimento.

### 1.2 Escopo
Aplica-se a todos os artefatos do projeto:
- Código-fonte (`src/`)
- Testes automatizados (`test/`)
- Arquivos de configuração (`package.json`, `vitest.config.js`, `.env.example`, etc.)
- Documentação

### 1.3 Definições e Abreviações
| Termo | Significado |
|-------|-------------|
| GCS | Gestão de Configuração de Software |
| IC | Item de Configuração |
| Baseline | Conjunto de ICs aprovados e estáveis |
| PR | Pull Request |
| CCB | Comitê de Controle de Mudança (neste projeto: o próprio autor + revisor) |

---

## 2. Organização e Responsabilidades

| Papel | Responsável | Responsabilidades |
|-------|-------------|-------------------|
| Desenvolvedor / Gerente de Configuração | Matheus Janing | Criar branches, abrir PRs, manter o plano de GCS, configurar proteção de branches e environments |
| Revisor (par de revisão) | Thiago Rodrigues Canal | Revisar e aprovar Pull Requests |

---

## 3. Ferramentas e Ambiente

| Ferramenta | Uso | Versão / Observação |
|------------|-----|---------------------|
| Git | Controle de versão | ≥ 2.30 |
| GitHub | Hospedagem do repositório, PRs, proteção de branch e Environments | - |
| Node.js | Runtime da aplicação | LTS |
| Vitest | Framework de testes | conforme `package.json` |
| Visual Studio Code / Cursor | Ambiente de desenvolvimento | - |

---

## 4. Itens de Configuração (ICs)

| IC | Localização | Controle |
|----|-------------|----------|
| Código-fonte | `src/` | Versionado |
| Testes | `test/` | Versionado |
| Configuração de build/testes | `package.json`, `vitest.config.js` | Versionado |
| Documentação | `docs/`, `README.md` | Versionado |
| Variáveis de ambiente | `.env` (não versionado) + `.env.example` (versionado) | Segredos fora do repositório |

---

## 5. Política de Branches

Adota-se um fluxo simples e controlado:

- **`main`**: branch de produção.  
  - Protegida.  
  - **Proibido push direto**.  
  - Toda alteração entra apenas via Pull Request com revisão.

- **`develop`** (ou `staging`): branch de integração / ambiente de homologação.

- **Branches de feature**:  
  - Padrão de nome: `feature/nome-da-funcionalidade`  
  - Exemplo: `feature/cadastro-usuario`

- **Branches de correção**:  
  - `fix/descricao-do-bug`  
  - `hotfix/descricao` (para correções urgentes em produção)

### Fluxo obrigatório
1. Criar branch a partir de `main` ou `develop`
2. Desenvolver e commitar
3. Abrir Pull Request
4. Solicitar revisão do par
5. Após aprovação e checks, fazer merge

---

## 6. Controle de Mudanças

- Toda mudança relevante deve ser feita via **Pull Request**.
- O PR deve conter:
  - Descrição clara do que foi feito
  - Referência à issue (quando existir)
  - Evidência de testes (quando aplicável)

- **Push direto na `main` é bloqueado** pela proteção de branch (evidência obrigatória da atividade).

---

## 7. Revisão de Código (Pair Review)

- É obrigatório ter **pelo menos um revisor com acesso de escrita** no repositório.
- O revisor deve aprovar o PR antes do merge na `main`.
- Configuração recomendada:
  - Branch protection rule na `main`:
    - Require a pull request before merging
    - Require approvals: 1
    - Restrict who can push to matching branches (ninguém, ou apenas admins em casos excepcionais)

---

## 8. Environments (Staging e Production)

Foram configurados os seguintes Environments no GitHub:

| Environment | Finalidade | Proteção |
|-------------|------------|----------|
| **staging** | Homologação / testes integrados | Pode exigir aprovação opcional |
| **production** | Ambiente de produção | **Revisor obrigatório: Matheus Janing** |

### Configuração do Environment `production`
- Required reviewers: **MatheusJaningDev** 
- Deployment branches: apenas `main` 

Isso garante que nenhum deploy em produção ocorra sem a aprovação explícita.

---

## 9. Baselines

| Baseline | Momento | Descrição |
|----------|---------|-----------|
| Baseline Inicial | Início do projeto | Estrutura inicial + plano de GCS |
| Baseline de Desenvolvimento | Após features estáveis | Código + testes aprovados |
| Baseline de Produção | Antes de cada release | Tag no GitHub (ex: `v1.0.0`) |

Tags devem ser criadas na `main` após merge e aprovação.

---

## 10. Identificação e Nomenclatura

- **Commits**: mensagens claras e no imperativo  
  Exemplos:
  - `feat: adiciona endpoint de encurtamento de URL`
  - `test: cobre cenário de URL inválida`
  - `docs: atualiza plano de GCS`

- **Pull Requests**: título descritivo + descrição do impacto

---

## 11. Armazenamento e Backup

- Repositório remoto: GitHub (fonte da verdade)
- Repositório local: cada desenvolvedor
- `.env` e segredos nunca são commitados (constam no `.gitignore`)

---

## 12. Manutenção deste Plano

Este documento deve ser revisado sempre que houver mudança significativa no processo de desenvolvimento ou nas ferramentas utilizadas. A versão atual é a **1.0**.

---

**Aprovado por:** Matheus Janing  
**Data:** 16/11/2026
