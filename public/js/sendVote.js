
const votelist = document.querySelectorAll('.votecard')

for (vote of votelist) {
    const card = document.getElementById(`${vote.id}`)
    card.addEventListener('click', async function () {
        console.log(this.id)
        const data = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: 'John Doe', 
                email: 'john@example.com' 
            })
        })
        window.location.replace('')
    })
}