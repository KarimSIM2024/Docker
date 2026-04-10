# Use a lightweight Node.js image
FROM node:18-alpine

# Create a directory inside the container
WORKDIR /app

# Copy your code into the container
COPY app.js .

# Export the port inside the container
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
