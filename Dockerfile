FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json package-lock.json
# Install app source code
COPY . .
RUN npm install
# For production uncomment below
# RUN npm ci --only=production

# Map app port to docker daemon
EXPOSE 3000
# Define command to run app -- run with node instead of nodemon b.c. not in dev
CMD ["node", "server.js"]