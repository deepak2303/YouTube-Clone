let video=JSON.parse(localStorage.getItem("video"));
let videoId=video.videoId;

let append= () =>{
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    iframe.allow="fullscreen"

    document.querySelector("#container").append(iframe);
}
append();

