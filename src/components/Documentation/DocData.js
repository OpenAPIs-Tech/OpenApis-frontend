const DATA = {
    "resume-builder": {
        "req":
    `{
    "fullName": "Emaddd Razaa khan",
    "addressAndPhone": [
        "emadk3@gmail.com",
        "Raza Manzil, Ward Number 7, Bihar-844506",
        "+91-7667149548"
    ],
    "educationalDetail": [
        {
            "degree": "B.Tech Mecanical Engineering",
            "location": "Aligarh,India",
            "collegename": "Aligarh Muslim University",
            "grade": "8.01",
            "duration": "20-03-2018 to 22-05-2022"
        },
        {
            "degree": "Intermediate",
            "location": "Patna,India",
            "collegename": "Dr. Zakir Husain High School +2",
            "grade": "7.6",
            "duration": "20-03-2015 to 22-05-2017"
        },
        {
            "degree": "Matriculation",
            "location": "Patna,India",
            "collegename": "T. Raja High School +2",
            "grade": "10",
            "duration": "20-03-2014 to 22-05-2015"
        }
    ],
    "workExperience": [
        
        {
            "CompanyName": "Filo Edtech Pvt Ltd",
            "designation": "Software Engineer Intern",
            "Location": "Gurugram",
            "duration": "Jan-2022 to April 2022",
            "Techstacks": "Node JS, MongoDB"
        }
    ],
    "projects": [
        {
            "projectName": "Open Source Resume Builder API",
            "techstacks": "Python, Flask, REST",
            "briefInfo": "API which takes all user information and return PDF"
        },
        {
            "projectName": "CRUD Operations backend",
            "techstacks": "Java, Spring boot",
            "briefInfo": "Different end points for CRUD operationss"
        }
    ],
    "skills": [
        {
            "programmingLangs": "Python, Java",
            "librariesOrFrameworks": "Flask, Django, Spring boot",
            "toolsOrPlatforms": "Docker, REST, Postman, Insomnia, Git",
            "databases": "MySQL, Redis"
        }
    ],
    "certificates": [
        {
            "certificate":"C++ from udemy"
        },
        {
            "certificate":"Java from udemy"
        }
    ],
    "hobbies": [
        {
            "hobby":"Music"
        },
        {
            "hobby":"Badminton"
        }
    ],
    "extraCurricular": [
        {
            "activity":"Sports"
        },
        {
            "activity":"Volunteering"
        }
    ],
    "achievements": [
        {
            "achievement":"Winner of Mr. Fresher event"
        }
    ]
}`,
        "api": "https://openapis.herokuapp.com/generatePdf"
    }
}

export default DATA