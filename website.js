let header_buttons = document.querySelectorAll(".header-buttons")
header_buttons.forEach(i => {
    i.addEventListener("click", ()=>{
        let page_name = i.textContent.trim()
        if (page_name == "Profile") {
            window.location.href = "index.html"
        } else if (page_name == "Experience") {
            window.location.href = "experience.html"
        } else if (page_name == "Portfolio") {
            window.location.href = "portfolio.html"
        }
        
    })
})
let video = document.querySelector(".video")
let player = document.querySelector("#video-player")
let close_button = document.querySelector(".close-button")
let images = document.querySelectorAll(".image")
images.forEach(i => {
    i.addEventListener("click", ()=>{
        let video_url = i.getAttribute("data-video")
        player.src = video_url
        video.style.display = "flex"
    })
})
close_button.addEventListener("click",()=>{
    video.style.display = "none"
    player.src = ""
})


