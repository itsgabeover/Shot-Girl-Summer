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
   const deleteBttn = document.createElement('button')
                    deleteBttn.innerText = "DELETE"
                     row.append(deleteBttn)   
   if (document.querySelector('#one').innerText === "") {
   const songLocation = document.querySelector('#one')
   const artistLocation = document.querySelector('#oneArtist')
   songLocation.innerText = song.name
   artistLocation.innerText = song.artist
   deleteBttn.addEventListener('click', () => {
    songLocation.innerText = ''
    artistLocation.innerText = ''
    deleteBttn.remove()
    
 }) 
    } else if (document.querySelector('#two').innerText === "") {
   const songLocation = document.querySelector('#two')
   const artistLocation = document.querySelector('#twoArtist')
   songLocation.innerText = song.name
   artistLocation.innerText = song.artist
   deleteBttn.addEventListener('click', () => {
    songLocation.innerText = ''
    artistLocation.innerText = ''
    deleteBttn.remove()
    
 }) 
   }
   else if (document.querySelector('#three').innerText === "") {
       const songLocation = document.querySelector('#three')
       const artistLocation = document.querySelector('#threeArtist')
       songLocation.innerText = song.name
       artistLocation.innerText = song.artist
       deleteBttn.addEventListener('click', () => {
        songLocation.innerText = ''
        artistLocation.innerText = ''
        deleteBttn.remove()
        
     }) 
       }
   else if (document.querySelector('#four').innerText === "") {
       const songLocation = document.querySelector('#four')
       const artistLocation = document.querySelector('#fourArtist')
       songLocation.innerText = song.name
       artistLocation.innerText = song.artist
       deleteBttn.addEventListener('click', () => {
        songLocation.innerText = ''
        artistLocation.innerText = ''
        deleteBttn.remove()
        
     }) 
       }  
       else if (document.querySelector('#five').innerText === "") {
         const songLocation = document.querySelector('#five')
         const artistLocation = document.querySelector('#fiveArtist')
         songLocation.innerText = song.name
         artistLocation.innerText = song.artist
         deleteBttn.addEventListener('click', () => {
            songLocation.innerText = ''
            artistLocation.innerText = ''
            deleteBttn.remove()
            
         }) 
         }
         else if (document.querySelector('#six').innerText === "") {
           const songLocation = document.querySelector('#six')
           const artistLocation = document.querySelector('#sixArtist')
           songLocation.innerText = song.name
           artistLocation.innerText = song.artist
           deleteBttn.addEventListener('click', () => {
            songLocation.innerText = ''
            artistLocation.innerText = ''
            deleteBttn.remove()
            
         }) 
           }
           else if (document.querySelector('#seven').innerText === "") {
             const songLocation = document.querySelector('#seven')
             const artistLocation = document.querySelector('#sevenArtist')
             songLocation.innerText = song.name
             artistLocation.innerText = song.artist
             deleteBttn.addEventListener('click', () => {
                songLocation.innerText = ''
                artistLocation.innerText = ''
                deleteBttn.remove()
                
             }) 
             } 
             else if (document.querySelector('#eight').innerText === "") {
               const songLocation = document.querySelector('#eight')
               const artistLocation = document.querySelector('#eightArtist')
               songLocation.innerText = song.name
               artistLocation.innerText = song.artist
               deleteBttn.addEventListener('click', () => {
                songLocation.innerText = ''
                artistLocation.innerText = ''
                deleteBttn.remove()
                
             }) 
               }
               else if (document.querySelector('#nine').innerText === "") {
                 const songLocation = document.querySelector('#nine')
                 const artistLocation = document.querySelector('#nineArtist')
                 songLocation.innerText = song.name
                 artistLocation.innerText = song.artist
                 deleteBttn.addEventListener('click', () => {
                    songLocation.innerText = ''
                    artistLocation.innerText = ''
                    deleteBttn.remove()
                    
                 }) 
                 } 
                 else if (document.querySelector('#ten').innerText === "") {
                   const songLocation = document.querySelector('#ten')
                   const artistLocation = document.querySelector('#tenArtist')
                   songLocation.innerText = song.name
                   artistLocation.innerText = song.artist
                   
                    
                     
                     deleteBttn.addEventListener('click', () => {
                        songLocation.innerText = ''
                        artistLocation.innerText = ''
                        deleteBttn.remove()
                        
                     })   
                    } 
 })
}
//Event Listeners
document.querySelector('#add-song').addEventListener('submit', handleAddSong)
const playlistForm = document.getElementById('create-playlist')
playlistForm.addEventListener('submit', handlePlaylist)
//Event Handlers
function handleAddSong(e) {
    e.preventDefault()
    let songObj = {
        name: e.target['add-song'].value,
        artist: e.target['add-artist'].value
    }
    addSong(songObj)
    console.log(songObj)
}
function addSong(songObj){
    console.log(JSON.stringify(songObj))
    fetch('http://localhost:3000/songs',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(songObj)
    })
    .then(res => res.json())
    .then(song => renderSongList(song))
}
function handlePlaylist(e){
    e.preventDefault()
    const playlistName = document.querySelector('#playlist-name')
    const userInput = e.target['playlist'].value
    playlistName.textContent = `Playlist Name: ${userInput}`
}




