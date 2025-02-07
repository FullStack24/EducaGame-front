# Etapa 1: Build do Next.js
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências (ignora devDependencies se NODE_ENV=production)
RUN npm install --legacy-peer-deps

# Copiar todo o código do projeto
COPY . .

# Construir a aplicação Next.js
RUN npm run build

# Etapa 2: Rodar o Next.js em produção
FROM node:18-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expor porta do Next.js
EXPOSE 3005

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
