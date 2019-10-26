var get = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new window.XMLHttpRequest()

        xhr.onreadystatechange = function ( ) {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

var catchError = function(e) {
    console.error('Erreur ajax', e);
}

// get('https://jsonplaceholder.typicode.com/users').then(function (response) {
//  console.log(response)
// }).catch(function (error) {
//     console.log(error)
// });

var getPosts = async function () {
    var response = await get('https://jsonplaceholder.typicode.com/users');
    var users = JSON.parse(response)
    var response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id);
    var posts = JSON.parse(response)
    return posts;
}


getPosts().then(function (posts) {
    console.log(posts)
}).catch(function (error) {
    console.log(error)
}).then(function () {
    console.log('Fin de requête ajax')
})

var getFirstPost = async function () {
    var posts = await getPosts()
    return posts[0]
}

Promise.all([
    getPosts(),
    getFirstPost()
]).then(function (arr) {
    console.log(arr)
})