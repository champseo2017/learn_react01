export function loadUsers(){
    return (dispatch) => {
        return dispatch(fetchUsers())
    }
}

function fetchUsers(){
    return {
        type:'LOAD_USERS',
        payload:fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
    }
}

/* loadAlbums */
export function loadAlbums(userID){
    return (dispatch) => {
        return dispatch(fetchAlbums(userID))
    }
}

/* function fetchAlbums */
function fetchAlbums(userID){
    return {
        type:'LOAD_ALBUMS',
        payload:fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .then(result => result.json())
    }
}

/* loadPhotos */
export function loadPhotos(albumID){
    return (dispatch) => {
        return dispatch(fetchPhotos(albumID))
    }
}

/* function fetchPhotos */
function fetchPhotos(albumID){
    return {
        type:'LOAD_PHOTOS',
        payload:fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
        .then(result => result.json())
    }
}