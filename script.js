let navlinks = document.querySelectorAll('nav ul li a[href^= "#"]');
navlinks.forEach( link => {
    link.addEventListener("click" , 
        function(event){
            event.preventDefault();
            console.log("prevented jumping ",this.textContent)
            let targetId = this.getAttribute("href");
            let targetSection = document.querySelector(targetId);

            if(targetSection)
            {
                targetSection.scrollIntoView({behavior : "smooth"});
                history.pushState(null,null,targetId)
            }

        });
        
});


document.addEventListener("DOMContentLoaded", () =>{
let bg_box = document.querySelector(".bg-box");
let toggle_box = document.querySelector(".toggle-box");
let circle = document.querySelector(".circle");
let cintainer = document.querySelector(".container");
let header = document.getElementById("head")
let checkbox = document.getElementById("checkbox")
const body = document.body;

toggle_box.onclick = function(){
    checkbox.checked =  ! checkbox.checked;
    if(checkbox.checked){
        circle.style.transform = "translateX(50px)";
        document.body.style.backgroundColor= "rgba(199, 126, 126, 0.89)";

        toggle_box.style.backgroundImage = " url('')";


        toggle_box.style.backgroundImage = " url('https://fixthephoto.com/images/content/moon-night-sky-png-free-81616514271.jpg')";

        

        toggle_box.style.boxShadow = "0px 0px 20px  rgb(99, 74, 74)";

        circle.style.backgroundColor=" rgb(245, 173, 173)";
        circle.style.boxShadow = "5px 5px 10px  rgb(187, 109, 109) inset";
        document.body.style.color= "black";

        header.style.backgroundColor="rgb(126, 0, 59)";
    }
    else{
        circle.style.transform = "translateX(0px)";
        document.body.style.backgroundColor= "rgb(126, 0, 59)";
        toggle_box.style.backgroundImage = "url('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=')";
        toggle_box.style.boxShadow = "0px 0px 20px  rgb(233, 171, 171)";
        circle.style.backgroundColor="rgb(126, 0, 59)";
        circle.style.boxShadow = "5px 15px 25px  rgb(255, 133, 133) inset";
        document.body.style.color= "white";
        header.style.backgroundColor="rgba(199, 126, 126, 0.89)";

    }
};
});


document.addEventListener("DOMContentLoaded",function()
{
   let btt = document.getElementById("back-to-top")
   let t = document.getElementById("home")

    window.addEventListener("scroll",function()
    {
        if(window.scrollY>200)
        {
            btt.style.display="block";
        }
        else{
            btt.style.display="none";
        }
    })
    btt.addEventListener("click" , function(event){
        event.preventDefault();
        
        
            t.scrollIntoView({behavior : "smooth"});

        
    })
    
    })

document.addEventListener("DOMContentLoaded",function()
{
    let doc = document.querySelectorAll("section")
    let navlink = document.querySelectorAll('nav ul li a[href^="#"]')
        window.addEventListener("scroll",function()
        {
            navlink.forEach(link=>link.classList.remove("active"));
            doc.forEach(section => 
            {
                let headerHeight = document.querySelector("nav").offsetHeight;
                let sectionTop = section.offsetTop - headerHeight;
                let sectionBottom = sectionTop +section.offsetHeight;
                let activelink = document.querySelector(`nav ul li a[href="#${section.id}"]`)
                if(window.scrollY>=sectionTop && window.scrollY< sectionBottom)
                {
                    if(activelink!= null)
                    {
                        
                        activelink.classList.add("active")
                    
                    }
                }
            })
        })
});


document.addEventListener("DOMContentLoaded",function(){
    let pop = document.querySelector(".pop-up");
    let close = document.getElementById("close");
    let hire = document.getElementById("hire");

    hire.addEventListener("click",function(event){
        pop.style.display = "block";
        event.stopPropagation();
        document.body.style.overflow="hidden";

        confetti({
            particleCount: 200, // Number of confetti pieces
            spread: 150,         // Spread area
            origin: { y: 0.6 }  // Start position (lower means higher start)
        });
        
    })
    close.addEventListener("click",function(){
        pop.style.display="none";
        document.body.style.overflow="visible";
    })
    document.addEventListener("click",function(event){
        if(!pop.contains(event.target) && event.target != hire) 
        {
            pop.style.display="none"; 
            document.body.style.overflow="visible";
        }
                
    });
});
    
let projects = document.getElementById("projects");
let real_text = projects.innerText;
projects.onclick = function(){
    if(projects.innerText == real_text){
        projects.innerText="This is my project";
    }
    else{
        projects.innerText= real_text;
    }
}
