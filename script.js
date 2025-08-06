const people = ['Lebron James', 'Adam Sandler', 'Drizzy Drake', 'Druski']
const action = ['shoot your shot', 'grind', 'practice leetcode', 'take a day off (sike practice leetcode)']
const verb = ['demands', 'urges', 'asks', 'suggests', 'commands']

function wordExtract (arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function output (people, action, verb){
    const person = wordExtract(people)
    const act = wordExtract(action)
    const verbiage = wordExtract(verb)
    console.log(`${person} ${verbiage} you to ${act}!`)
}

output(people, action, verb)