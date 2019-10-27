var links = document.querySelectorAll('li');
for (var i = 0; i < links.length; i++) {
    links[i ].addEventListener('click', function (e) {
        e.preventDefault()
        url = this.firstElementChild.getAttribute('href')
        meteo(url)
    })
}

function meteo(url) {
    var httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = function() {
        var result = document.getElementById('result')
        result.innerText = 'chargement ...'
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                result.innerText= httpRequest.responseText
            }
        }
    }
    httpRequest.open('POST', url, true)
    // httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // httpRequest.send("city=Montpellier&nom=Henry")

    var formData = new FormData()
    formData.append('city', 'Monpellier')
    formData.append('name', 'Van')
    httpRequest.send(formData)

}

var form = document.querySelector('#contact')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    var data = new  FormData(form)
    var httpRequest = new XMLHttpRequest()
    var url = this.getAttribute('action')
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var result = document.getElementById('result')
                result.innerText = httpRequest.responseText
            }
        }
    }
    httpRequest.open('POST', url, true)
    httpRequest.send(data)
})
