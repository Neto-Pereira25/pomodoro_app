# ⏳ Pomodoro App

Um **timer de produtividade** baseado na Técnica Pomodoro, desenvolvido com **React + TypeScript**, que permite alternar entre ciclos de trabalho e descanso com facilidade, exibindo estatísticas úteis como ciclos concluídos e tempo total de trabalho.

---

## 📌 Sobre o Projeto

Este é um aplicativo que implementa a técnica de gerenciamento de tempo chamada **Pomodoro**, que consiste em:

- **25 minutos de trabalho** (por padrão),
- **5 minutos de pausa curta** após cada ciclo,
- **15 minutos de pausa longa** após 4 ciclos.

Com isso, o app permite:

- Iniciar ciclos de trabalho;
- Alternar entre pausa curta e longa;
- Pausar e continuar o tempo;
- Visualizar estatísticas de produtividade.

---

## 🧠 Funcionalidades

- ⏱ Timer com controle de trabalho e descanso;
- 🔁 Gerenciamento de ciclos;
- 🔔 Áudios para início e fim de sessões;
- 📊 Exibição de métricas (ciclos concluídos, tempo total, número de pomodoros);
- 🎨 Interface simples, responsiva e amigável.

---

## 📂 Estrutura do Projeto
```bash
├── public/ 
├── src/ 
│   ├── components/ 
│   │   ├── button.tsx 
│   │   ├── pomodoro-timer.tsx 
│   │   └── timer.tsx 
│   ├── hooks/ 
│   │   └── use-interval.tsx 
│   ├── utils/ 
│   │   ├── seconds-to-minutes.ts 
│   │   ├── seconds-to-time.ts 
│   │   └── zero-left.ts 
│   ├── App.tsx 
│   ├── index.tsx 
│   └── index.css 
├── .editorconfig 
├── .eslintrc.js 
├── .prettierrc.js 
├── package.json 
├── tsconfig.json 
└── README.md
```
---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/project-pomodoro-app.git
cd project-pomodoro-app
```
2. **Instale as dependências:**
```bash
npm install
# ou
yarn
```
4. **Inicie o projeto:**
```bash
npm start
# ou
yarn start
```
O app estará disponível em http://localhost:3000

---
## 🛠 Tecnologias Utilizadas
* React 19
* TypeScript
* React Hooks
* ESLint + Prettier para padronização de código

---
## 🎨 Estilo e Código
O projeto segue as boas práticas de desenvolvimento com:
* ESLint (.eslintrc.js);
* Prettier (.prettierrc.js);
* EditorConfig para padronização entre editores.

---
## 🔊 Créditos dos Sons
Os arquivos de áudio utilizados para notificação estão localizados em src/sounds/ e são usados para indicar o início e fim de uma sessão.

---
## ✨ Autor
Desenvolvido com ❤️ por [José Neto](https://github.com/Neto-Pereira25)
