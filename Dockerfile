# Select basic image.
FROM node:14-alpine3.10

# Create app directory.
WORKDIR /cli

# Add bash, git and openssh.
RUN apk add --no-cache bash git openssh

# Copy source, install dependencies, configure environment.
COPY . .
RUN npm i -g @imazzine/cli@0.0.0
RUN npm i -g @imazzine/tmp
RUN npm i
RUN rm -rf $(npm root --global)/@imazzine/cli
RUN ln -s . $(npm root --global)/@imazzine/cli
RUN ln -s /cli/cli.js $(npm bin --global)/zz
RUN mkdir /project

# Run tests.
CMD ["npm", "run", "test:lcov"]