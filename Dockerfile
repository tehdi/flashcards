FROM node:alpine3.10

RUN npx create-react-app react-app

# This works, but it takes over the terminal window that you run it in when you do the first build/run
# Buuuut then subsequent starts are fine. so...
ENTRYPOINT ["yarn", "--cwd", "/react-app", "start"]
