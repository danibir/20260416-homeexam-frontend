
const index_get = (req, res) => {
    return res.render('index')
}
const choice_get = (req, res) => {
    cards = ["a", "b", "c", "d"]
    return res.render('choice', { cards })
}

module.exports = {
    index_get,
    choice_get
}