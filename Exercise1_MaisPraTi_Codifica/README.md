# 📘 Exercícios JavaScript com Node.js

Este projeto contém a resolução de 15 exercícios básicos de lógica de programação utilizando a linguagem **JavaScript** no ambiente **Node.js**.  
Alguns exercícios utilizam entrada de dados via terminal, com o pacote `readline-sync`.

---

## 📁 Estrutura do Projeto
Os códigos de cada exercécio estão separados na pasta Exercicio1

### 🔹 Arquivos separados:

```bash
Q1.js
Q2.js
...
Q15.js               # Cada arquivo contém a resolução de um exercício
```

---

## ✅ Pré-requisitos

Antes de executar os exercícios, você precisa ter:

- [Node.js](https://nodejs.org/pt) instalado na sua máquina
- Acesso ao terminal (Prompt de Comando, PowerShell ou Terminal do VS Code)

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para preparar o ambiente:

1. **Clone o repositório ou extraia o arquivo `.zip`**

```bash
git clone https://github.com/Ana-Jackeline/Exercise1_MaisPraTi_Codifica
```

Ou baixe o arquivo `.zip` e extraia com botão direito → “Extrair aqui”.

2. **Acesse a pasta do projeto no terminal**

```bash
cd Exercicio1
```

3. **Inicialize o projeto Node.js (caso ainda não exista o `package.json`)**

```bash
npm init -y
```

4. **Instale o pacote necessário para entrada de dados via terminal**

```bash
npm install readline-sync
```

---

## ▶️ Como Executar os Exercícios

Execute um por vez:

```bash
node Q1.js
node Q2.js
...
node Q15.js
```

---

## 📚 Exercícios Resolvidos

1. Verificar se número é par ou ímpar (`if`)
2. Classificação por idade (criança, adolescente, adulto, idoso)
3. Classificação de nota (Aprovado, Recuperação, Reprovado)
4. Menu interativo com `switch-case`
5. Cálculo de IMC e categoria de peso
6. Verificação de tipo de triângulo (Isósceles, Escaleno, Equilátero)
7. Cálculo de valor de maçãs com base na quantidade
8. Ordenação crescente entre dois valores distintos
9. Contagem regressiva de 10 a 1 (`for`)
10. Impressão repetida de um número 10 vezes
11. Soma de 5 números informados pelo usuário
12. Tabuada de um número fornecido
13. Cálculo de média até o usuário digitar 0
14. Cálculo de fatorial de um número (`for` ou `while`)
15. Sequência de Fibonacci (primeiros 10 números)

---

## 📦 Observações

- O pacote `readline-sync` é necessário para entrada de dados.  
  Ele **deve ser instalado dentro da pasta do projeto**, onde estão os arquivos `.js`.

- Se você copiar os arquivos para outra pasta, **repita o comando**:

```bash
npm install readline-sync
```

- Para cada arquivo que usa entrada do usuário, inclua no início:

```javascript
const readline = require('readline-sync');
```

---

## 👩‍💻 Autora

**Ana Jackeline**  
Projeto desenvolvido para praticar lógica de programação com JavaScript e Node.js

