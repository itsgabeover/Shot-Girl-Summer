let counter = 1;

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
        console.log(document.querySelector('#one').innerText)
        if (document.querySelector('#one').innerText === "") {
        const songLocation = document.querySelector('#one')
        const artistLocation = document.querySelector('#oneArtist')
        songLocation.innerText = song.name
        artistLocation.innerText = song.artist
         } else if (document.querySelector('#two').innerText === "") {
        const songLocation = document.querySelector('#two')
        const artistLocation = document.querySelector('#twoArtist')
        songLocation.innerText = song.name
        artistLocation.innerText = song.artist
        }
        else if (document.querySelector('#three').innerText === "") {
            const songLocation = document.querySelector('#three')
            const artistLocation = document.querySelector('#threeArtist')
            songLocation.innerText = song.name
            artistLocation.innerText = song.artist
            }
        else if (document.querySelector('#four').innerText === "") {
            const songLocation = document.querySelector('#four')
            const artistLocation = document.querySelector('#fourArtist')
            songLocation.innerText = song.name
            artistLocation.innerText = song.artist
            }  
            else if (document.querySelector('#five').innerText === "") {
              const songLocation = document.querySelector('#five')
              const artistLocation = document.querySelector('#fiveArtist')
              songLocation.innerText = song.name
              artistLocation.innerText = song.artist
              }
              else if (document.querySelector('#six').innerText === "") {
                const songLocation = document.querySelector('#six')
                const artistLocation = document.querySelector('#sixArtist')
                songLocation.innerText = song.name
                artistLocation.innerText = song.artist
                }
                else if (document.querySelector('#seven').innerText === "") {
                  const songLocation = document.querySelector('#seven')
                  const artistLocation = document.querySelector('#sevenArtist')
                  songLocation.innerText = song.name
                  artistLocation.innerText = song.artist
                  } 
                  else if (document.querySelector('#eight').innerText === "") {
                    const songLocation = document.querySelector('#eight')
                    const artistLocation = document.querySelector('#eightArtist')
                    songLocation.innerText = song.name
                    artistLocation.innerText = song.artist
                    }
                    else if (document.querySelector('#nine').innerText === "") {
                      const songLocation = document.querySelector('#nine')
                      const artistLocation = document.querySelector('#nineArtist')
                      songLocation.innerText = song.name
                      artistLocation.innerText = song.artist
                      } 
                      else if (document.querySelector('#ten').innerText === "") {
                        const songLocation = document.querySelector('#ten')
                        const artistLocation = document.querySelector('#tenArtist')
                        songLocation.innerText = song.name
                        artistLocation.innerText = song.artist
                        }            
      })
  

}

function createPlaylistTable() {

}

const playlistForm = document.getElementById('create-playlist')

playlistForm.addEventListener('submit', e => {
    e.preventDefault()
    const playlistName = document.querySelector('#playlist-name')
    const userInput = e.target['playlist'].value

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