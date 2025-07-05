# TaskFlow Backend

---

## 🚀 Visão Geral do Projeto

O **TaskFlow Backend** é uma API RESTful robusta, desenvolvida para ser o coração de um sistema de gerenciamento de tarefas colaborativo. Esta aplicação permite o registro de usuários, a criação e gestão de tarefas pessoais e, futuramente, possibilitará a colaboração entre usuários em listas de tarefas.

Este projeto foi construído com foco em **boas práticas de desenvolvimento backend**, utilizando uma arquitetura modular e demonstrando proficiência em **Node.js**, **Express.js** e **PostgreSQL**.

## ✨ Funcionalidades

* **Autenticação de Usuários (Registro):** Permite que novos usuários criem suas contas com segurança.
* **Gerenciamento de Tarefas:**
    * Criação de novas tarefas com título, descrição, data de vencimento e associação a um usuário.
    * Listagem de todas as tarefas de um usuário específico.
    * Atualização de tarefas existentes (ex: marcar como concluída, alterar título/descrição).
    * Exclusão de tarefas.
* **Armazenamento Persistente:** Utiliza PostgreSQL para garantir a persistência e integridade dos dados.
* **Estrutura de Projeto Profissional:** Organizado em camadas (models, controllers, routes, config) para facilitar a manutenção e escalabilidade.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express.js**: Framework web para Node.js, utilizado para construir a API REST.
* **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
* **`pg`**: Driver Node.js para PostgreSQL.
* **`dotenv`**: Para carregar variáveis de ambiente.
* **`bcrypt`**: Para hash seguro de senhas.

## 📦 Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o TaskFlow Backend em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* **Node.js** (versão 18.x ou superior)
* **npm** (gerenciador de pacotes do Node.js)
* **PostgreSQL** (e um cliente como pgAdmin para gerenciar o banco de dados)

### 1. Clonar o Repositório

```bash
git clone [https://github.com/LuizGustavo-Gomes/taskflow-backend.git](https://github.com/LuizGustavo-Gomes/taskflow-backend.git)
cd taskflow-backend