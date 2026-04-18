
const index_get = (req, res) => {
    console.log('Index (get)')
    return res.render('index')
}
const choice_get = async (req, res) => {
    console.log('Choice (get)')
    const result = await fetch('http://localhost:4000/foxesForVote')
    const cards = await result.json()
    return res.render('choice', { cards })
}

module.exports = {
    index_get,
    choice_get
}