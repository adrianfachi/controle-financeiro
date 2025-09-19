# 💰 Controle Financeiro Pessoal 📊

## 📌 Visão Geral
Desafio: criar uma aplicação de **controle de finanças pessoais** onde o usuário poderá registrar entradas e saídas de dinheiro e acompanhar seu saldo.

---

## 🚀 Descrição do Projeto

### 🎯 Objetivo
Desenvolver uma aplicação que permita ao usuário:

- Adicionar transações (entrada ou saída).
- Ver a lista das transações salvas no banco.
- Exibir o saldo total atualizado automaticamente.
- Mostrar gráficos de distribuição de gastos por categoria.
- Persistir os dados em um **MongoDB**.

---

## 🔑 Funcionalidades Principais

- Cadastro de transação: valor, descrição, categoria, tipo (entrada/saída).
- Listagem de transações com dados vindos da API.
- Resumo financeiro: total de entradas, saídas e saldo.
- Gráfico de categorias (usando **Recharts** ou **Chart.js**).
- Persistência no **MongoDB** (nada de `localStorage`!).
- Layout responsivo com feedback visual.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React + Vite
- Axios ou Fetch API (para chamadas HTTP)
- React Router (opcional, caso queira páginas separadas)
- Recharts ou Chart.js (gráficos)
- Tailwind CSS / Chakra UI / Styled Components

### Backend
- Node.js + Nest.js
- MongoDB (Atlas ou local)
- Mongoose (ODM para trabalhar com schemas)
- Dotenv (para variáveis de ambiente, como conexão ao banco)

---

## 📚 Materiais e Tutoriais de Apoio
- [MongoDB Atlas (banco na nuvem gratuito)](https://www.mongodb.com/atlas)  
- [Mongoose Docs](https://mongoosejs.com/)  
- [Nest Docs](https://docs.nestjs.com)  
- [Recharts Docs](https://recharts.org/)  

---

## 🎯 Conceitos para Praticar

### Frontend (React)
- **Hooks**: `useState`, `useEffect`.
- **Props e componentização** (Formulário, Lista, Card, Header, Gráfico).
- **Integração com API** (CRUD: Create, Read, Update, Delete).

### Backend (Nest.js + Mongo)
- **Rotas REST**:
  - `GET /transactions` → listar
  - `POST /transactions` → criar
  - `PUT /transactions/:id` → editar
  - `DELETE /transactions/:id` → remover
- **Schema com Mongoose** para validar os dados.
- **Conexão MongoDB** (Atlas ou local).

---

## 🎉 Próximos Desafios (Extras)
- Filtros por categoria ou mês.
- Autenticação de usuário (ex.: JWT).
- Deploy do frontend (**Vercel/Netlify**) e backend (**Render/Heroku**).
- Dark/Light Mode 🌙☀️.
- PWA para instalar no celular.

---

🔥 **Dica**: comece pelo backend (Nest + Mongo), crie as rotas e depois conecte o frontend React. Assim você já treina fluxo **fullstack** real.  
