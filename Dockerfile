# Usa uma imagem oficial do Node.js para o build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Build do Next.js
RUN npm run build

# -----------------------------------
# Segunda etapa: otimizar para produção
FROM node:20-alpine AS runner

WORKDIR /app

# Copia apenas os arquivos necessários para rodar o app
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expor a porta da aplicação
EXPOSE 3000

# Iniciar a aplicação Next.js
CMD ["npm", "run", "start"]
