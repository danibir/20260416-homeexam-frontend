
const votelist = document.querySelectorAll('.votecard')

for (vote of votelist) {
    const card = document.getElementById(`${vote.id}`)
    card.addEventListener('click', async function () {
        console.log(this.id)
        const data = await fetch('http://localhost:4000/voteApply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                vote: this.id
            })
        })
        console.log('Vote succcess')
        window.location.replace('')
    })
}