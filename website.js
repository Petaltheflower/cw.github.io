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
if (images.length > 0 && video && close_button){
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
}


let profile_picture  = document.querySelector(".profile-picture")
document.addEventListener('mousemove', function(e){
    let rect = profile_picture.getBoundingClientRect()
    let image_x = rect.left + rect.width
    let image_y = rect.top + rect.height
    let dist_x = e.clientX - image_x
    let dist_y = e.clientY - image_y
    let anglex = dist_y/(window.innerWidth/2) * -20
    let angley = dist_x/(window.innerHeight/2) * 20
    profile_picture.style.transform = `rotateX(${anglex}deg) rotateY(${angley}deg)`
})

