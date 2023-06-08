function enter() {
    var username = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var birthDay = document.querySelector('input[type="date"]').value;
    
    if (username != '' && email.includes("@") && birthDay != '') {
        checkUser();
        document.getElementById('user-name').innerHTML = username;
        document.getElementById('user-email').innerHTML = email;
        document.getElementById('log-box').style.display = 'none';
        document.getElementById('home').style.display = 'block';
    } else {
        document.querySelector('input[type="submit"]').style.color = 'red';
    }
}

function checkUser(){
    var username = document.querySelector('input[type="text"]').value;
    var checkUserInfo = username.toLowerCase();
    var img = document.querySelector('.profile-img-border img');
    var path = './img/';
    var imgList = [
            'profile.jpg',
            'bawk.jpg',
            'mangai.jpg',
            'sut.jpg',
            'jasengsan.jpg',
            'sengmai.jpg',
            'moehtay.jpg',
            'nbwi.jpg'
        ];
    if (checkUserInfo.includes("moe" && "htay") || checkUserInfo.includes("ha")){
        img.setAttribute('src',path+imgList[6]);
    } else if (checkUserInfo.includes("aung" && "li")) {
        alert('Wellcome '+ username);
    } else if (checkUserInfo.includes("lu")) {
        img.setAttribute('src',path+imgList[1]);
    } else if (checkUserInfo.includes("ngai")) {
        img.setAttribute('src',path+imgList[2]);
    } else if (checkUserInfo.includes("m" && "naw")) {
        img.setAttribute('src',path+imgList[3]);
    } else if (checkUserInfo.includes("san")) {
        img.setAttribute('src', path + imgList[4]);
    } else if (checkUserInfo.includes("mai")) {
        img.setAttribute('src', path + imgList[5]);
    }  else if (checkUserInfo.includes("nbwi" && "sut")) {
        img.setAttribute('src', path + imgList[7]);
    } else{
        alert('Wellcome : '+ checkUserInfo);
    }
}

function back(){
    close();
}

function Open(){
    open('more.html');
}

function hideAnimation(){
    var aniDisplay = document.getElementById('animation').style;
    
    aniDisplay.animation = 'animation 5s';
}

function webSearch(){
    const https = 'https:/\/';
    const com = '.com';
    const domain = document.getElementById('webSearch').value;
    const url = https + domain + com;
    if (domain.startsWith('https') || domain.endsWith('.com')) {
        open(domain)
    }else if(domain == ''){
        alert("SYSTEM CANN'T FIND ANY URL !!");
    } else {
        open(url);
    }
}

/* const all = document.querySelectorAll(".all");

for (const classes of all) {
    classes.addEventListener("click", (e) => {
        alert('click');
        let cls = classes.dataset.name;
        switch (cls) {
            //open html tag
            case 'close':
                close();
                break;
            default :
                alert("err");
        }
    });
}
 */
