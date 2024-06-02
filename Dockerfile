# Stage 1: Build the React application
FROM node:18.17.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the rest of your app's source code from your host to your image filesystem.
# Be more specific here to avoid copying sensitive data
COPY public ./public
COPY src ./src
COPY .env .env
COPY vite.config.js vite.config.js

# Build the project for production
RUN npm run build

RUN npm run test


# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Create a group and user
RUN addgroup -S nginx && adduser -S nginx -G nginx

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

# Change ownership of the nginx directory to the non-root user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Switch to the non-root user
USER nginx

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
