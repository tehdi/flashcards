export const cardData = [
    {
        id: 1,
        category: "Physics",
        prompt: "Equation for force",
        response: "F=ma where F=force, m=mass, a=acceleration"
    },
    {
        id: 2,
        category: "JavaScript",
        prompt: "var vs let vs const",
        response: `
            - var is wishy-washy. Can be reassigned, scope depends on where it was defined: in a function = local, out = global. if you "var foo" as a global then again inside a function, you're secretly reusing the var.
            - let is always scoped local to its block. Can still be reassigned and shadowed.
            - const is always scoped local to its block, and it can't be reassigned (but it can still be shadowed).`
    }
]
