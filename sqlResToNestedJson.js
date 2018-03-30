const json = `
[
	{
		"prompt":"Dr. Emmett Brown: If my calculations are correct...",
		"question_id":1,
		"answer":"88"
	},
	{
		"prompt":"Dr. Emmett Brown: If my calculations are correct...",
		"question_id":1,
		"answer":"112"
	},
	{
		"prompt":"Dr. Emmett Brown: We won't need...",
		"question_id":2,
		"answer":"Roads/roads"
	}
]`

const sqlResToNestedObj = json => {
	const objArr = JSON.parse(json)
	
	const questionsSet = new Set
	objArr.forEach(obj => {
		questionsSet.add(obj.prompt)
	})
	
	const questionsObjArr = []
	questionsSet.forEach(question => {
		questionsObjArr.push({
			prompt: question,
			answers:[]
		})
	})

	questionsObjArr.forEach(questionsObj => {
		objArr.forEach(obj => {
			if (questionsObj.prompt === obj.prompt) {
				questionsObj.answers.push(obj.answer)
			}
		})
	})

	console.log(questionsObjArr)
}

sqlResToNestedObj(json)