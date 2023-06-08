document.addEventListener("DOMContentLoaded", function() {
    const parentElement = document.querySelector('.video-trending');

    if (parentElement) {
        const srcList = [
            " https://youtube.com/embed/o1HCcCYKjdk ",
 
            " ./img/1.mp4 ",
            " ./img/2.mp4 ",
            " ./img/1.mp4 ",
            " ./img/2.mp4 ",





        ];

        for (let i = 0; i < srcList.length; i++) {
            const iframe = document.createElement('iframe');
            iframe.src = srcList[i];
    
            parentElement.appendChild(iframe);
        }
    } else {
            console.error("Parent element not found. Please check your selector.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelector('.video-container');

    if (videos) {
        const srcListVideo = [
            " ./img/1.mp4 ",
            "  ", 
            " ./img/2.mp4 ",
            " ./img/1.mp4 ",
            "  ",
            " ./video/d.mp4 ",
            " ./video/e.mp4 ",
            "  ",
            " ./img/2.mp4 ",


        ];

        for (let i = 0; i < srcListVideo.length; i++) {
            const iframe2 = document.createElement('iframe');
            iframe2.src = srcListVideo[i];
    
            videos.appendChild(iframe2);
        }
    } else {
            console.error("Parent element not found. Please check your selector.");
    }
});
