var k = -1;
var i = 0;
var t = 0;



function f(a) {
    if (a) k++;
    if (!a) k--;

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            return response.json()
        })
        .then(data => {


            if (k < 0) k += data.length;
            if (k > data.length - 1) k -= data.length;

            document.getElementById("title").innerHTML = data[k].title;
            document.getElementById("main_img").src = data[k].url;
            document.getElementById("small_img_0").src = data[k].thumbnailUrl;

            for (i = 1; i <= 4; i++) {
                t = k + i;
                if (t > data.length - 1) t -= data.length;
                document.getElementById("small_img_" + i).src = data[t].thumbnailUrl;
                t = k - i;
                if (t < 0) t += data.length;
                document.getElementById("small_img_-" + i).src = data[t].thumbnailUrl;
            }
        })
        .catch(err => {
            // Do something for an error here
        })
}