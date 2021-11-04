type pokeres = {
    name: string
    url: string
}

type results = Array<pokeres>

type datares = {
    next: string
    previous: string
    array: results
}

export type {pokeres, results, datares}