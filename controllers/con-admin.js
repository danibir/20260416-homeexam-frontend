const upload_get = (req, res) => {
    console.log('Upload (get)')
    res.render('upload')
}
const upload_post = async (req, res) => {
    console.log('Upload (post)')
    const result = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            word: "hi"
        })
    })
    const data = await result.json()
    res.json(data)
}


module.exports = {
    upload_get,
    upload_post
}