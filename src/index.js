const projects = [
    {
        id: 1,
        name: 'Abc',
    },
    {
        id: 2,
        name: 'Efg',
    },
]
const create = () => {
    const project = projects.find((project) => (project.id = 3))

    return project
}

let a = create()

console.log(a)
