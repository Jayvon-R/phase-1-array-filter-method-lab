const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(a, b) {
    return a.filter(a => a.toLowerCase() === b.toLowerCase())
}

function fuzzyMatch(a, b) {
    return a.filter(a => a.charAt(0) === b.charAt(0))
}

const matchName = (a, b) => a.filter(a => a.name === b)
