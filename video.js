document.addEventListener("DOMContentLoaded", function() {
    const parentElement = document.querySelector('.video-trending');

    if (parentElement) {
        const srcList = [
            " ./video/1.mp4 ",
            " ./video/2.mp4 ",
            " ./video/3.mp4 ",
            " ./video/4.mp4 ",
            " https://youtube.com/embed/o1HCcCYKjdk ",
            "  ",
            " ./video/5.mp4 ",
            " ./video/6.mp4 ",
            " ./video/7.mp4 ",
            " ./video/8.mp4 ",
            " ./video/9.mp4 ",
            "  ",
            "  ",
            "  ",
            "  ",
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
            " ./video/a.mp4 ",
            "  ", 
            " ./video/b.mp4 ",
            " ./video/c.mp4 ",
            "  ",
            " ./video/d.mp4 ",
            " ./video/e.mp4 ",
            "  ",
            " ./video/f.mp4 ",
            "  ",
            "  ",
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