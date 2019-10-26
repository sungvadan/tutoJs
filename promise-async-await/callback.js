var get = function (url,  success, error) {
    var xhr = new window.XMLHttpRequest()

    xhr.onreadystatechange = function ( ) {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.responseText)
            } else {
                error(xhr)
            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

var getPosts = function (){
    get('https://jsonplaceholder.typicode.com/users', function(response) {
        var users = JSON.parse(response)
        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
            var posts = JSON.parse(response)
            console.log(posts)
        }, function (error) {
            console.log(error)
        })
    }, function (error) {
        console.log(error)
    })
}

console.log(getPosts())
