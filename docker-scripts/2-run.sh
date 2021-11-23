#!/bin/sh

docker run -it --name flashcards \
  --volume ~/projects/react/flashcards/src:/react-app/src \
  --volume ~/projects/react/flashcards/public:/react-app/public \
  flashcards
