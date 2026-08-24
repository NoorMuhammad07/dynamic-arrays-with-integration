let userdata = [
    {
        name: "Ali Ahmed",
        course: "Web Development",
        duration: "6 months",
    },
    {
        name: "Muhammad rafid",
        course: "Digital Marketing",
        duration: "3 months",
    },
    {
        name: "Abdul Rehman",
        course: "Graphic Designing",
        duration: "2 months",
    },
    {
        name: "rahim ali",
        course: "SEO Marketing",
        duration: "2 months",
    },
    {
        name: "Abdul basit",
        course: "AI and Machine Learning",
        duration: "1 year",
    },
    {
        name: "shahbaz ali",
        course: "IT Support",
        duration: "3 months",
    },
    {
        name: "Hashir ali",
        course: "3d Animation",
        duration: "5 months",
    },
    {
        name: "Samar jafri",
        course: "Cyber Security",
        duration: "6 months",
    }

]
console.log(userdata)

let alldata = ""

userdata.forEach((element) => {
    alldata += `<div class="card m-3 w-25">
                    <div class="card-body" id= "data">
                        <h5 class="card-title text-center"><b>User Information</b></h5>
                        <hr>
                        <p class="card-text"><b>Name:</b> ${element.name}</p>
                        <p class="card-text"><b>Course:</b> ${element.course}</p>
                        <p class="card-text"><b>Duration:</b> ${element.duration}</p>
                        <a href="#" class="btn btn-primary ">Delete</a>
                        <a href="#" class="btn btn-primary">Edit</a>
                    </div>
                </div>`;
});
document.getElementById("alldata").innerHTML = alldata;