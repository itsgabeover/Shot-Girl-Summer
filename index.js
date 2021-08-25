const createPlaylist = () => {
}

    // fetch('https://accounts.spotify.com/authorize')
    // .then(res => res.json())
    // .then(musicList => {
    //     musicList.forEach(oneSong => {


    //     })
    // })


    const tableBody = document.getElementById('table-body');
    song.forEach(song => {
    const newRow = document.createElement('tr');
    for (let attribute in person) {
    const newCell = document.createElement('td');
    newCell.innerText = person[attribute];
    newRow.append(newCell);
  }
  tableBody.append(newRow);
});

 



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