fetch('http://localhost:3000/songs')
     .then(res => res.json())
     .then(songObjects => {
         songObjects.forEach(song => {
           renderSongList(song)
         })
        })

function renderSongList(song){
    const songTable = document.getElementById('table-body')
    const row = document.createElement('tr')
    songTable.append(row)

    const songName = document.createElement('td')
    songName.innerText = song.name
    row.append(songName)
    
    const artistName = document.createElement('td')
    artistName.innerText = song.artist
    row.append(artistName)

    const addToPlaylist = document.createElement('button')
    addToPlaylist.innerText = "ADD"
    row.append(addToPlaylist)

    addToPlaylist.addEventListener('click', (e) => {
        e.preventDefault()
        const bodyPlaylist = document.querySelector('#playlist-body tr')
        bodyPlaylist.innerText = song.name
      })
  

}

function createPlaylistTable() {

}

const playlistForm = document.getElementById('create-playlist')

playlistForm.addEventListener('submit', e => {
    e.preventDefault()
    const playlistName = document.querySelector('#playlist-name')
    const userInput = e.target['playlist'].value
    console.log(userInput)

    playlistName.textContent = `Playlist Name: ${userInput}`

})



//         const dogForm = document.getElementById(‘dog-form’)
//         data.forEach( (dog) => {
//             const table = document.getElementById(‘table-body’)
//             const row = document.createElement(‘tr’)
//             table.append(row)
//             const dogNames = document.createElement(‘td’)
//             dogNames.innerText = dog.name
//             row.append(dogNames)
//             const dogBreed = document.createElement(‘td’)
//             dogBreed.innerText = dog.breed
//             row.append(dogBreed)
//             const dogSex = document.createElement(‘td’)
//             dogSex.innerText = dog.sex
//             row.append(dogSex)
//             const dogButton = document.createElement(‘button’)
//             dogButton.innerText = ‘Edit Dog’
//             row.append(dogButton)
//             dogButton.addEventListener(‘click’, (e) => {
//                 e.preventDefault()
//                 console.log(dogForm.name, dog.name)
//                 dogForm.name.value = dog.name
//                 dogForm.breed.value = dog.breed
//                 dogForm.sex.value = dog.sex

function deleteSongFromPlayList(){ 
    //
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.addEventListener('click', handleDelete)
    button.textContent = 'Delete'
    // li.textContent = `${} `;
    li.appendChild(button);
    document.querySelector('#tasks').appendChild(li);
}