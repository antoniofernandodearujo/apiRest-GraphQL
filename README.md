## 🌐 API Rest & GraphQL - Projeto de Estudo 🚀

### 📝 Descrição
Este é um pequeno projeto de estudo que implementa uma API Rest e GraphQL para demonstrar as diferenças entre essas abordagens. Embora neste caso as diferenças não sejam tão aparentes, o objetivo é ilustrar conceitos que podem ser úteis em projetos maiores. 🌟

O repositório inclui um backend com Node.js e TypeScript e um frontend mobile com Expo e React Native.

### ✨ Objetivos
1- Entender as diferenças entre API Rest e GraphQL.
2- Demonstrar uma implementação simples de ambas as abordagens.
3- Criar uma base para projetos futuros onde essas diferenças fazem sentido em escala maior.
### 🛠️ Tecnologias Utilizadas

#### Backend
- Node.js 🌐
- Express 🚀
- Apollo Server 🛰️
- TypeScript 🔷

#### Frontend
- React Native 📱
- Expo ⚡
- TypeScript 🔷

#### Outras ferramentas
- Turbo Repo 🏎️ (Monorepo Management)

### 🚀 Como rodar o projeto
#### Pré-requisitos
- Node.js >= 16.x
- Expo CLI
- Yarn ou npm

- Turbo Repo instalado globalmente:
```bash
npm install turbo -g
```

- Clone o repositório:

```bash
git clone https://github.com/antoniofernandodearujo/apiRest-GraphQL.git
cd apiRest-GraphQL
```

- Instale as dependências:

```bash
yarn install
```

- Inicie o ambiente de desenvolvimento:

```bash
npx turbo dev
```

#### Acesse as interfaces:

- Backend (API Rest e GraphQL):
- API Rest: http://localhost:4000/rest/todos
- GraphQL Playground: http://localhost:4000/graphql
- Frontend Mobile (Expo):
- Siga as instruções no terminal para abrir no seu dispositivo ou emulador.

### 🧑‍💻 Funcionalidades
#### API Rest
- GET /rest/todos - Lista todas as tarefas.
- POST /rest/todos - Adiciona uma nova tarefa.
- PUT /rest/todos/:id - Atualiza o status de uma tarefa.
- DELETE /rest/todos/:id - Remove uma tarefa.
  
#### GraphQL
- Query todos - Retorna todas as tarefas.
- Mutation addTodo - Adiciona uma nova tarefa.
- Mutation updateTodoStatus - Atualiza o status de uma tarefa.
- Mutation deleteTodo - Remove uma tarefa.

### 🌟 Diferenças entre API Rest e GraphQL

  <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #ffffff;">
    <thead>
      <tr style="background-color: #0073e6; color: white;">
        <th style="padding: 15px; border: 1px solid #ddd;">Aspecto</th>
        <th style="padding: 15px; border: 1px solid #ddd;">API Rest 🌐</th>
        <th style="padding: 15px; border: 1px solid #ddd;">GraphQL 🛰️</th>
      </tr>
    </thead>
    <tbody>
      <tr style="text-align: center;">
        <td style="padding: 15px; border: 1px solid #ddd;">Estrutura de Dados</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Endpoint fixo para cada recurso</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Consulta customizável</td>
      </tr>
      <tr style="text-align: center; background-color: #f9f9f9;">
        <td style="padding: 15px; border: 1px solid #ddd;">Overfetching/Underfetching</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Pode trazer dados desnecessários ou insuficientes</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Traz exatamente o que você pede</td>
      </tr>
      <tr style="text-align: center;">
        <td style="padding: 15px; border: 1px solid #ddd;">Flexibilidade</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Limitada</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Alta</td>
      </tr>
      <tr style="text-align: center; background-color: #f9f9f9;">
        <td style="padding: 15px; border: 1px solid #ddd;">Quando usar?</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Sistemas simples e bem definidos</td>
        <td style="padding: 15px; border: 1px solid #ddd;">Apps complexos com muitos relacionamentos</td>
      </tr>
    </tbody>
  </table>

### 📌 Próximos Passos
- 🔧 Criar um projeto maior onde a diferença entre REST e GraphQL seja essencial.
- 📱 Adicionar mais funcionalidades no frontend mobile.
- 🔄 Integrar com um banco de dados para persistência.
