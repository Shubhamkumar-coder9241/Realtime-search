let users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amita mehta",
        pic: "https://images.unsplash.com/photo-1758625634941-c36e4ced9b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2N3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://plus.unsplash.com/premium_photo-1687832254785-97c947542e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://images.unsplash.com/photo-1774128089578-62b9454c0697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://images.unsplash.com/photo-1778403283539-9e67927cfda2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://plus.unsplash.com/premium_photo-1756147641535-6232626a4cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "don't text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://images.unsplash.com/photo-1722171210773-4a2e54197061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },
];
function showUsers(arr) {
    document.querySelector(".cards").innerHTML = "";
    arr.forEach(function (user) {
  // Create outer card div
  const card = document.createElement("div");
  card.classList.add("card");

  // Create image
  const img = document.createElement("img");
  img.src =user.pic;
  img.classList.add("bg-img");

  // Create blurred-layer div
  const blurredLayer = document.createElement("div");
  blurredLayer.style.backgroundImage=`url(${user.pic})`
  blurredLayer.classList.add("blurred-layer");

  // Create content div
  const content = document.createElement("div");
  content.classList.add("content");

// Create h3 and paragraph
const heading = document.createElement("h3");
heading.textContent = user.name;

const para = document.createElement("p");
para.textContent =user.bio;

// Append heading and paragraph to content
content.appendChild(heading);
content.appendChild(para);

// Append all to card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);


        // Add card to page
    document.querySelector(".cards").appendChild(card);
    
})};
showUsers(users);

let inp=document.querySelector("input");
inp.addEventListener("input", function(){
  let newUsers=  users.filter((user)=>{
     return   user.name.startsWith(inp.value)
    });
    showUsers(newUsers);
});