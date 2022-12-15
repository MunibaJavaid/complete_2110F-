var xmlhttp = new XMLHttpRequest();
var url = "Film-Name.json";
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var array = JSON.parse(xmlhttp.responseText);
        for (key in array) {
            document.getElementById('image').src = "https://iv1.lisimg.com/image/13486360/500full-jack-reacher%3A-never-go-back-poster.jpg";
            document.getElementById('Title').innerHTML += "</b>" + array[key] + "<br/>";
        }
    }

}
xmlhttp.open("GET", url, true);
xmlhttp.send();

var xmlnewhttp = new XMLHttpRequest();
var url = "About.json";
xmlnewhttp.onreadystatechange = function () {
    if (xmlnewhttp.readyState == 4 && xmlnewhttp.status == 200) {
        var arr = JSON.parse(xmlnewhttp.responseText);
        for (k in arr) {
            document.getElementById('About').innerHTML += "<b>" + k + arr[k] + "<br/>";
        }
    }
}

xmlnewhttp.open("GET", url, true);
xmlnewhttp.send();


