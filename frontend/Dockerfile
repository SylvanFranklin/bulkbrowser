FROM node:20-alpine
WORKDIR /frontend
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "preview"]
EXPOSE 4173
