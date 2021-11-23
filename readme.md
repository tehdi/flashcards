Use the docker scripts to do things. You shouldn't need to rebuild, but if you let the running container stop then you'll need to `start` it again. If for some reason you need to `run` it again, remember that it'll steal your terminal. Just `ctrl-c` and then run the `start` script to get to where you need to be.

var vs let vs const:
- var is wishy-washy. can be reassigned, scope depends on where it was defined: in a function = local, out = global. if you `var foo` as a global then again inside a function, you're secretly reusing the var. Don't use var.
- let is always scoped local to its block. Can be reassigned and shadowed. Maybe don't use let either.
- const is always scoped local to its block, and it can't be reassigned (but it can still be shadowed). How about let's default to const?

# Progress Tracking
1. TODO: make `docker run` work properly.
1. DONE: display a thing on the screen
1. DONE: read a thing from a file, then display it on the screen
1. TODO: read multiple things from the same file. display them on the screen one at a time. add a button to tell it when I'm done with each thing
1. TODO: read the things from multiple files instead of the same file
