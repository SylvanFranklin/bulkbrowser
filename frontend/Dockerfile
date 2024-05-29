# Use the official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the frontend app
RUN npm run build

# Expose the port (assuming 5000)
EXPOSE 5173

# Serve the frontend app
CMD ["npx", "serve", "public"]
