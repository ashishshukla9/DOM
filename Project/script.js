// get the data

var users = [
    {
        profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Mumbai, India",
        name: "Ashish",
        age: 28,
        interest: ["Music, Singing, Learning"],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Delhi, India",
        name: "Manish Shukla",
        age: 38,
        interest: ["Dancing, Singing, Learning"],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location: "Kolkata, India",
        name: "Anurag Ganguly",
        age: 21,
        interest: ["Playing, Heart, Learning"],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 10,
        location: "Uttar Pradesh, India",
        name: "Mohan Rai",
        age: 29,
        interest: ["Playing, Singing, Dancing"],
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        isFriend: null
    },
]

function select(elem) {
    return document.querySelector(elem)
}

var curr = 0;
(function setInitial() {
    select(".maincard img").src = users[curr].profilePic;
    select(".incomingcard img").src = users[curr + 1].profilePic;
    select(".prflimb img").src = users[curr].profilePic;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;

    var clutter = ''
    users[curr].interest.forEach(function (interest) {
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        <i class="text-sm ri-music-2-fill"></i>
        <h3 class="text-sm tracking-tighter capitalize">${interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;
    curr = 2;
})();