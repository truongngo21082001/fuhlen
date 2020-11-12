var index = 1;
Next = function() {
    var imgs = ["g900s.jpg", "phone.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 2) {
        index = 0;
    }
}

Back = function() {
    var imgs = ["g900s.jpg", "phone.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 2) {
        index = 0;
    }
}
setInterval(Next, 3000);