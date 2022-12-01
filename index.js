// Project:-

const API_KEY="AIzaSyBHGRSW_uFkSeJeu7SCKVloCbnB2ux9MOo";


let search=async () =>{
    try{
        let query=document.querySelector("#query").value;
        const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
        let res=await fetch(url);
        let data=await res.json();

        append(data.items);

        console.log(data);
    } catch(error){
        console.log(error);
    }
}

let append= (data) =>{
    let container=document.querySelector("#results");
    console.log(data);
    data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=thumbnails.default.url;

        let h3=document.createElement("h3");
        h3.innerText=title;

        div.append(image,h3);

        let video={
            title,
            videoId
        }
        div.onclick = () =>{
            playVideo(video);
        }
        container.append(div);
    });
}

let playVideo = (video) =>{
    localStorage.setItem("video",JSON.stringify(video))
    window.location.href="video.html"
}



{/* <iframe width="560" height="315" 
src="https://www.youtube.com/embed/IPMcQgaUrCg"  // Video ID:- IPMcQgaUrCg
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; 
autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe> */}
