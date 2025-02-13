# **EducaGame — FRONT**

## **PITCH E RODANDO PROJETO**
https://youtu.be/Sp5VYNp_K98

## **Descrição**
O **EducaGame** é uma plataforma gamificada desenvolvida para auxiliar professores(as) da rede pública no gerenciamento de turmas, avaliações e desempenho dos alunos. Além disso, a plataforma utiliza elementos de gamificação para aumentar o engajamento e a motivação dos estudantes.

Este repositório contém a implementação do back-end do sistema, desenvolvido utilizando o framework **NestJS** e o ORM **Prisma**. O back-end gerencia toda a lógica de negócios, persistência de dados e comunicação com o front-end.

## **Sobre o EducaGame**

O **EducaGame** é uma plataforma gamificada inovadora desenvolvida para auxiliar professores da rede pública no processo de ensino e aprendizagem. Através de atividades personalizadas e desafios interativos, o EducaGame busca tornar a aquisição de conhecimento mais envolvente e motivadora para os alunos.

### **Principais Características**
- Atividades personalizadas pelos professores para cada matéria.
- Sistema de recompensas com moedas virtuais para incentivar o engajamento dos alunos.
- Possibilidade de trocar moedas por pontos extras no boletim ao final do bimestre.
- Abordagem gamificada para tornar o ensino mais dinâmico e interativo.

### **Desafios e Aprendizados**

Durante o desenvolvimento do EducaGame, a equipe enfrentou alguns desafios, como a gestão eficiente do tempo e a necessidade de reuniões frequentes para manter a produtividade. Além disso, a arquitetura do projeto se mostrou um elemento essencial para o sucesso da solução.

Um dos principais desafios foi inovar em um mundo em constante evolução tecnológica, buscando oferecer uma ferramenta que realmente fizesse a diferença na experiência de ensino e aprendizagem.

### **Visão para o Futuro**
A equipe do EducaGame tem uma visão ambiciosa para o futuro da plataforma. Alguns dos objetivos incluem:
- Expandir a gamificação, integrando uma ampla variedade de conteúdos dinâmicos e interações entre alunos e professores.
- Criar uma biblioteca virtual rica em materiais específicos e gratuitos para potencializar o aprendizado.
- Simplificar e otimizar a gestão acadêmica, facilitando o controle de notas, provas e trabalhos em tempo real.
- Aprimorar o monitoramento da frequência dos alunos e tornar o compartilhamento de feedbacks com os pais mais eficiente.

Essas melhorias visam proporcionar uma experiência ainda mais completa e eficaz para alunos, professores e gestores educacionais.

### **Arquitetura e Entrega**

O EducaGame foi desenvolvido seguindo uma arquitetura modular e organizada, visando facilitar a manutenção e escalabilidade do sistema. A equipe se dedicou a entregar um MVP (Minimum Viable Product) funcional que demonstra o potencial da plataforma em auxiliar no processo de ensino e aprendizagem.

### **Arquitetura e Entrega**
O front-end adota uma arquitetura modular, com uma estrutura de páginas dinâmicas e componentes para facilitar tal modularização. A estrutura está organizada da seguinte forma:

```plaintext

EducaGame-front
├── .next/                    # Arquivos de build do Next.js
├── node_modules/             # Dependências do projeto
├── public/                   # Arquivos estáticos (imagens, ícones, etc.)
├── src/                      # Código-fonte principal
│   ├── components/           # Componentes reutilizáveis
│   ├── globalComponents/     # Componentes globais compartilhados
│   ├── interfaces/           # Definição de interfaces TypeScript
│   │   ├── class.interface.ts  # Interface para a entidade 'Class'
│   ├── pages/                # Páginas do Next.js
│   │   ├── index.tsx         # Página inicial
│   │   ├── ranking.tsx       # Página de ranking
│   ├── services/             # Serviços para chamadas à API
│   ├── styles/               # Arquivos de estilos (CSS, Tailwind, etc.)
│   ├── utils/                # Funções utilitárias
├── .env                      # Variáveis de ambiente
├── .gitignore                # Arquivos ignorados pelo Git
├── next.config.js            # Configuração do Next.js
├── package.json              # Dependências e scripts do projeto
├── tsconfig.json             # Configuração do TypeScript


```

## **Tecnologias Utilizadas**

- **Next.js** → Framework React para aplicações full-stack e SSR (Server-Side Rendering).
- **React** → Biblioteca para construção da interface do usuário.
- **TypeScript** → Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS** → Framework de estilização
- **Axios** → Para chamadas HTTP ao backend.
- **Firebase** → Para autenticação e notificações.

### **Funcionalidades de Destaque**
- Gerenciamento de turmas, usuários e avaliações.
- Sistema de quizzes e atividades (gameficação).
- Sistema de premiações e rankings.
- Autenticação e segurança.
- Experiência responsiva e acessível.

## **Principais Módulos**
### **Autenticação (auth)**
-📌 Objetivo: Gerenciar o login e a autenticação de usuários.
-🔹 Firebase Authentication para autenticação.
-🔹 Controle de acesso para professores e alunos.
-🔹 Persistência do usuário autenticado no estado global.

### **Gestão de Turmas (turmas)**
-📌 Objetivo: Permitir que professores gerenciem suas turmas e alunos.
-🔹 Cadastro e organização de turmas.
-🔹 Associação de avaliações a turmas específicas.

### **Rankings (ranking)**
-📌 Objetivo: Exibir a classificação dos alunos e turmas.
-🔹 Opção para alternar entre ranking de alunos e turmas.
-🔹 Listagem dinâmica com os melhores desempenhos.

### **Gamificação (gamification)**
-📌 Objetivo: Tornar a experiência de aprendizado mais envolvente.
-🔹 Pontuação e níveis para os alunos.
-🔹 Feedback visual para progresso e conquistas.
-🔹 Integração com quizzes e atividades.
-🔹 Configuração de regras de gamificação pelos professores.

### **Quizzes e Atividades (quizzes)**
-📌 Objetivo: Exibir e gerenciar as atividades dos alunos.
-🔹 Interface para responder quizzes e exercícios.
-🔹 Correção automática e exibição de feedback.
-🔹 Registro de desempenho para gamificação.

### **Notificações (notifications)**
-📌 Objetivo: Alertar os usuários sobre eventos importantes.
-🔹 Feedback instantâneo para alunos ao final das avaliações.
-🔹 Exibição de alertas sobre novas atividades e eventos.
-🔹 Configuração de notificações personalizadas.

## **Configuração do projeto**
### **Pré-Requisitos**
- **Node.js** (versão 18 ou superior)
- **Docker** (caso queira rodar via container)
- **Gerenciador de pacotes:**
|--- **npm** (incluso com Node.js)
|--- **yarn** (instalar com npm install -g yarn)

### **Instalação**
## **Rodando localmente (sem Docker):**
1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/educagame-front.git
cd educagame-front
```
2. Instale as dependências

```bash
npm install
# ou, se estiver usando Yarn:
yarn install
```

3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto e configure os valores necessários, como a URL da API do backend.

4. Inicie o servidor

```bash
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação
Abra o navegador e acesse:

```bash
http://localhost:3000
```

## **Rodando com Docker:**
1. Construa a imagem do Docker

```bash
docker build -t educa-game-bd
```

2. Execute o container

```bash
docker run -p 3000:3000 educagame-front
```

3. Acesse a aplicação

```bash
http://localhost:3005
```

## Equipe

- Ariel Andrielli Rodrigues da Silva
- José Luccas Gabriel Francisco de Andrade Santos
- Vitor Vilton Laurentino
- Thwany Leles

### **Referências**
- Protótipo no Figma: [Link para o Figma](https://www.figma.com)
- Repositório do Back-End: [EducaGame Back-End](https://github.com/FullStack24/EducaGame-back)

### **Licença**
Este projeto está licenciado sob a licença MIT.
