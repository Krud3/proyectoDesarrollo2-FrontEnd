# Dockerfile.testing
FROM node:18.17.0-alpine

# Create a group and user to run the application
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json or yarn.lock
COPY package*.json ./

# Install dependencies including 'devDependencies'
RUN npm install --ignore-scripts

# Copy only necessary source files
COPY public ./public
COPY src ./src
COPY vite.config.js vite.config.js

# Change ownership of the working directory to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser
