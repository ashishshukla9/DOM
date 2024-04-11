// get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Mumbai, India",
        name: "Ashish",
        age: 28,
        // interest: ["Music", "Singing", "Learning"],
        interests: [{
            icon: `<i class="ri-music-line"></i>`,
            interest: "Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Writing"
        }],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Delhi, India",
        name: "Manish",
        age: 38,
        interests: [{
            icon: `<i class="ri-movie-2-line"></i>`,
            interest: "Dancing"
        }, {
            icon: `<i class="ri-golf-ball-line"></i>`,
            interest: "playing"
        }],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location: "Kolkata, India",
        name: "Anurag",
        age: 21,
        interests: [{
            icon: `<i class="ri-movie-2-line"></i>`,
            interest: "acting"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Writing"
        }],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 10,
        location: "Uttar Pradesh, India",
        name: "Mohan",
        age: 29,
        interests: [{
            icon: `<i class="ri-movie-2-line"></i>`,
            interest: "Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Writing"
        }],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
]

function select(elem) {
    return document.querySelector(elem)
}
let curr = 2;
let isAnimating = false;
(function setInitial() {
    select(".maincard img").src = users[curr].profilePic
    select(".incomingcard img").src = users[curr + 1]?.profilePic
    select(".prflimb img").src = users[curr].profilePic
    select(".badge h5").textContent = users[curr].pendingMessage
    select(".location h3").textContent = users[curr].location
    select(".name h1:nth-child(1)").textContent = users[curr].name
    select(".name h1:nth-child(2)").textContent = users[curr].age
    let clutter = ''
    users[curr].interests.forEach(function (interest) {
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}
        <h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[curr].bio
    curr = 2;
})();
function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let t1 = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].profilePic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        t1.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
            .from(".incomingcard", {
                scale: .9,
                opacity: 0,
                ease: Circ,
                duration: 1.1
            }, "a")
    }

}
let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function () {
    // console.log("hey")
    imageChange();
});

(function containerCreateor() {
    document.querySelectorAll(".element")
        .forEach(function (element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            // console.log(div)
            div.appendChild(element);
            select(".details").appendChild(div);
        })
})();

gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .1,
    ease: Power4.easeInOut,
    duration: 1




})