const fs = require('fs')
const array=[]
fs.readFile('input.txt', 'utf8', function (err, data) {
	if (err) throw err
    data.trim().split('\n').forEach(
        e=>{
            array.push(e.trim())
        }
    )

	checkTrees(array, 3, 1)
	checkTrees2(array)
})

const checkTrees = (data, right, down) => {
	let j = 0
	let trees = 0
	for (let i = 0; i < data.length; i += down) {
		data[i][j] === '#' ? trees++ : null
		j += right
		if (j > data[0].length-1) {
			j -= data[0].length
		}
    }
	console.log(`counting tree is ${trees}`)
	return trees
}



const checkTrees2 = data => {
	let treeArray = []
	let routes = [
		[1, 1],
		[3, 1],
		[5, 1],
		[7, 1],
		[1, 2],
	]

	for (let i = 0; i < routes.length; i++) {
		const trees = checkTrees(data, routes[i][0], routes[i][1])
		treeArray.push(trees)
	}
	let result = treeArray.reduce((acc, curr) => acc * curr)
	console.log(`total multiple tree is ${result}`)
}