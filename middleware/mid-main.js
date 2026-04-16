const setLocal = (req, res, next) => {
    res.locals.title = "Unknown page"
    return next()
}

module.exports = {
    setLocal
}