# Stage 1: Build the React application
FROM node:18.17.0-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the project for production
RUN npm run build

RUN npm run test


# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]