//local reviews

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
// selection from the DOM
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const message = document.getElementById("message");
const nextBtn = document.querySelector(".next-btn");
const random = document.querySelector(".random");
const prevBtn = document.querySelector(".prev-btn");



// start review
let startReview = 0;

// first review to show when page loads
window.addEventListener("DOMContentLoaded", function () {
    show();
})

function show() {
    const template = reviews[startReview];
    image.src = template.img;
    author.textContent = template.name;
    job.textContent = template.job;
    message.textContent = template.text;
}
// click on next button to show the next review
nextBtn.addEventListener("click", function () {
    startReview++;
    
    if (startReview > reviews.length - 1) {
        startReview = 0;
    }
    show();
    
})
// click on previous button to show the previous review
prevBtn.addEventListener("click", function () {
    startReview--;
    console.log(startReview);
    if (startReview < 0) {
        startReview = reviews.length - 1;
    }
    show();
    
})

// click on random button to show any review

random.addEventListener("click", function () {
    startReview = Math.floor(Math.random() * reviews.length);
    show();
})

