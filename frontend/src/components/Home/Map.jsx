import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import geoUrl from "../Map/main.json"
import { MarkerPin } from "../icons"
import { Tooltip } from "@nextui-org/tooltip";

const markers = [
    { markerOffset: -30, name: "Divij Shah", coordinates: [-74.0060, 40.7128], country: "United States", company: "NCSU", linkedIn: "https://www.linkedin.com/in/divij-v-shah/", },
    { markerOffset: 15, name: "Dwireph Parmar", coordinates: [-118.2437, 34.0522], country: "United States", company: "New York University", linkedIn: "https://www.linkedin.com/in/dwireph-parmar-2a1b831b1" },
    { markerOffset: 15, name: "Mayank Gupta", coordinates: [-87.6298, 41.8781], country: "United States", company: "Vistex", linkedIn: "https://www.linkedin.com/in/mayank-gupta-pdpu" },
    { markerOffset: -30, name: "Rushil Vora", coordinates: [-95.3698, 29.7604], country: "United States", company: "GrowBy Exx Services Pvt. Ltd.", linkedIn: "https://www.linkedin.com/in/rushil-vora-a71b37197/" },
    { markerOffset: 15, name: "Yuvraj Goyal", coordinates: [-112.0740, 33.4484], country: "United States", company: "Pandit Deendayal Energy University", linkedIn: "https://www.linkedin.com/in/yuvraj-goyal-873285204" },
    { markerOffset: 15, name: "Philadelphia", coordinates: [-75.1652, 39.9526], country: "United States", company: "NA", linkedIn: "NA" },
    { markerOffset: -30, name: "Rishit Joshi", coordinates: [-98.4936, 29.4241], country: "United States", company: "Cerebulb", linkedIn: "https://www.linkedin.com/in/rishit-joshi-b01706123" },
    { markerOffset: 15, name: "Divyang Chauhan", coordinates: [-117.1611, 32.7157], country: "United States", company: "NA", linkedIn: "https://www.linkedin.com/in/divyang-chauhan-152797197/" },
    { markerOffset: 15, name: "Richa Prajapati", coordinates: [-96.7969, 32.7767], country: "United States", company: "PDEU", linkedIn: "https://www.linkedin.com/in/richa-prajapati-728728119" },
    { markerOffset: 15, name: "Jainil Patel", coordinates: [-121.8863, 37.3382], country: "United States", company: "GrowBy Exx Services Pvt. Ltd.", linkedIn: "https://www.linkedin.com/in/jainil-r-patel/" },
];


let entries = [
    {
        "Sheet1": [
            {
                "Area of Expertise": "Deep learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "IIT Roorkee",
                "Linked In Profile Link": "https://www.linkedin.com/in/samip-sharma-b9318b237",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Software Development with Java and Angular Tech stack, Machine Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Synoptek ",
                "Linked In Profile Link": "https://www.linkedin.com/in/vishwa-v-01ba73168/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science, Data Analytics, Marketing",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "PMG",
                "Linked In Profile Link": "https://www.linkedin.com/in/nihitparikh",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "University of California - San Diego",
                "Linked In Profile Link": "linkedin.com/in/devamd",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Frontend Development(JS)",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Appointy",
                "Linked In Profile Link": "https://www.linkedin.com/in/jaypatel1210/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Android Development & Project Management",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Jio Platforms Limited",
                "Linked In Profile Link": "parndesai16",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Product Management",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Zerobalance Technologies Private Limited",
                "Linked In Profile Link": "https://www.linkedin.com/in/parthagoras/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Full Stack Developer - Team Lead",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Spyne.ai",
                "Linked In Profile Link": "https://www.linkedin.com/in/sahil-rupani-527762130/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Cyber security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/krutika-patel-15826a102",
                "Country of Current Stay (Residence)": "Canada",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Security engineer ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "BT eServ",
                "Linked In Profile Link": "https://www.linkedin.com/in/meet-kava-740792109",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Research Projects to the BTech/MTech Students, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Cyber Security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "University Of Arlington, USA",
                "Linked In Profile Link": "yet to be updated",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Cyber Security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Accenture ",
                "Linked In Profile Link": "https://www.linkedin.com/in/sagar-patel-3ab976126",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Ambient Intelligence, Smart Systems, Internet of Things",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "Ph.D.",
                "Name of the Current Organization": "Shri S'ad Vidya Mandal Institute of Technology, Bharuch",
                "Linked In Profile Link": "https://www.linkedin.com/in/ashish-d-patel/?originalSubdomain=in",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Cyber Security Domain ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Accenture Solutions Pvt Ltd ",
                "Linked In Profile Link": "https://www.linkedin.com/in/gandhidevansh",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Cyber Security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "Any other",
                "Name of the Current Organization": "Na",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshita-jasoliya-a3159112a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Help in Setting-up Alumni Sponsored Laboratories"
            },
            {
                "Area of Expertise": "Cyber security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "-",
                "Linked In Profile Link": "-",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Software Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Tagline Infotech LLP",
                "Linked In Profile Link": "https://www.linkedin.com/in/drashti-kheni/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Software developer",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Kapture CX",
                "Linked In Profile Link": "https://www.linkedin.com/in/heet-sinojiya-3a5b601ba",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Unemployed ",
                "Linked In Profile Link": "https://www.linkedin.com/in/prachi-doshi-7817781a9",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Artificial Intelligence",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infocusp innovations Pvt. Ltd.",
                "Linked In Profile Link": "Hansal Shah",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Support in Arranging Industrial Visits for the Existing Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Data Analytics",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "University of Massachusetts Boston",
                "Linked In Profile Link": "https://www.linkedin.com/in/shreyaa1010",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Data engineer ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Growexx",
                "Linked In Profile Link": "https://www.linkedin.com/in/kothari-jinal",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Arizona State University",
                "Linked In Profile Link": "https://www.linkedin.com/in/smitpatelcs/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Data Analytics and Digital Health",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "McMaster University",
                "Linked In Profile Link": "https://www.linkedin.com/in/tirth-j-raval",
                "Country of Current Stay (Residence)": "Canada",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Software Engineer",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Shipmnts",
                "Linked In Profile Link": "https://www.linkedin.com/in/smit-patel-0bb358188",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development with Python",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Streamoid Technologies Pvt Ltd ",
                "Linked In Profile Link": "https://www.linkedin.com/in/pranam-doshi-5176b7154",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Management",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "N/A",
                "Linked In Profile Link": "https://www.linkedin.com/in/om-vaghela-a15193225",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Antenna design and Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "Ph.D.",
                "Name of the Current Organization": "Symbiosis Institute of Technology , Symbiosis International Deemed University Pune",
                "Linked In Profile Link": "https://www.linkedin.com/in/kanhaiya-sharma-10779316/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Software Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "TD Bank",
                "Linked In Profile Link": "http://linkedin.com/in/jay-patel-3743b920b",
                "Country of Current Stay (Residence)": "Canada",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Machine Learning/ Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "University of Applied Science ,Dortmund",
                "Linked In Profile Link": "https://www.linkedin.com/in/iamraghubhetwal",
                "Country of Current Stay (Residence)": "Germany",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Blockchain",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "GlobalVox Inc",
                "Linked In Profile Link": "https://www.linkedin.com/in/shivisharma1010/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Quicko Infosoft Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/vishwasganatra/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Software Development (Web, Mobile, SaaS, PaaS), Deep Learning (Computer Vision)",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Reliance Jio",
                "Linked In Profile Link": "https://www.linkedin.com/in/tirth-patel-2001/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Computer + MBA",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "Any other",
                "Name of the Current Organization": "NMIMS, Mumbai",
                "Linked In Profile Link": "https://www.linkedin.com/in/twinkle-bhimani-1a54a8184",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Data Management ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "NA",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department"
            },
            {
                "Area of Expertise": "Computer Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhwani-dholaria",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "None",
                "Linked In Profile Link": " https://www.linkedin.com/in/vaidehi-patel-24b082210",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Quicko",
                "Linked In Profile Link": "linkedin.com/prem-banker",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students, To Provide Scholarship / Financial Help to the Deserving/Needy Students"
            },
            {
                "Area of Expertise": "Computer science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "University of Southern California",
                "Linked In Profile Link": "Check out Akshit Dhruv's profile on LinkedIn https://www.linkedin.com/in/akshit-dhruv-aab9541b2",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Management ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "Any other",
                "Name of the Current Organization": "Schulich school of business ",
                "Linked In Profile Link": "https://www.linkedin.com/in/anooksha-yogesh-rathod",
                "Country of Current Stay (Residence)": "Canada",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Artificial intelligence (computer vision)",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Origin health",
                "Linked In Profile Link": "https://www.linkedin.com/in/prithviraj-kanaujia",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "Arizona State University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/malvi-m",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Help in Curriculum Design/ Revision, To Help in Setting-up Alumni Sponsored Laboratories, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Cyber Security & Cyber Forensics ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Comexpo Cyber Security",
                "Linked In Profile Link": "https://www.linkedin.com/in/viral-parmar-8402a04a/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Software Development Engineer",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "The University of Texas at Dallas",
                "Linked In Profile Link": "https://www.linkedin.com/in/kevan-mehta/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "-",
                "Linked In Profile Link": "https://www.linkedin.com/in/neev-shah-832339175/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "University of Florida",
                "Linked In Profile Link": "https://www.linkedin.com/in/shaanyasingh/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Data Analytics and Machine Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infosys ",
                "Linked In Profile Link": "https://www.linkedin.com/in/sagar-sinha-491434130/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "Northeastern University",
                "Linked In Profile Link": "https://www.linkedin.com/in/drishti-sabhaya-83446a193/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Autodesk ",
                "Linked In Profile Link": "https://www.linkedin.com/in/apurva-l-1714991b6",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Scoence",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "Drexel University ",
                "Linked In Profile Link": "dhrumil7",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Financial Markets. ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Sunrise Gilts",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhyey-raithatha-220529158",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web Development and Digital Marketing ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Institute of Management Technology, Ghaziabad",
                "Linked In Profile Link": "http://linkedin.com/in/karan-kukadia",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Deep Learning, Machine learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "ID Medical",
                "Linked In Profile Link": "www.linkedin.com/in/nirajpatel1818",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Data science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "No",
                "Linked In Profile Link": "https://www.linkedin.com/in/patel-kajal-98a711154",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Computer science and engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Tata consultancy services",
                "Linked In Profile Link": "https://www.linkedin.com/in/khushi-patel-298113173",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Frontend framework : Ionic Angular ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Eccentric Engine, Mumbai ",
                "Linked In Profile Link": "https://www.linkedin.com/in/charli-gandhi-5654a817a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Argusoft (Gandhinagar)",
                "Linked In Profile Link": "https://www.linkedin.com/in/tirth-patel-283130219",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/ronak-makwana-40072a173/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Analyst ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Stridely Solutions ",
                "Linked In Profile Link": "https://www.linkedin.com/in/rushit-shah-b04a1b156",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Finance ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Futures First",
                "Linked In Profile Link": "https://www.linkedin.com/in/yash-patel-310599",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "GATE AND DSA",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Intel",
                "Linked In Profile Link": "linkedin.com/in/rabs-1309",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Rice University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/abhishek-shah-ams35",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Analytics ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Boston University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/-vaidehi-shah",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "IoT, AI, Ml, Full stack development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "Technicolor ",
                "Linked In Profile Link": "https://www.linkedin.com/in/shailesh-arya",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "SocialPilot",
                "Linked In Profile Link": "https://www.linkedin.com/in/devanshoo",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Computer Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Northeastern University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/bansi-patel-",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Google",
                "Linked In Profile Link": "https://www.linkedin.com/in/vok8/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Coding, system design, backend framework",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Groww",
                "Linked In Profile Link": "@pranjal-goyal-dev",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Northewestern University",
                "Linked In Profile Link": "https://www.linkedin.com/in/tanmeet-butani",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "San Jose state university ",
                "Linked In Profile Link": "https://www.linkedin.com/in/-jigar-shah",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Wipro",
                "Linked In Profile Link": "https://www.linkedin.com/in/harpalsinh-sisodiya-331990216",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/pathik-viramgama-88054120b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Research Projects to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Ese",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "Na",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Technical Writing, Product",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/neha-badiani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Zeda.io",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshitrathi6451",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Full stack development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "North Carolina State University",
                "Linked In Profile Link": "https://www.linkedin.com/in/devansh-shah19",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Full stack development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Goldman sachs ",
                "Linked In Profile Link": "https://www.linkedin.com/in/rajvi-shah-1032871b3",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "SDE",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pirimid Fintech",
                "Linked In Profile Link": "https://www.linkedin.com/in/devjariwala",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "JP Morgan Chase & Co.",
                "Linked In Profile Link": "http://linkedin.com/in/harsh-vachhani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Full stack ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Technofoodies",
                "Linked In Profile Link": " linkedin.com/in/rutvi-virparia",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "FULL STACK, CTRM/ETRM",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "capSpire",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhruvil-soni",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Computer Science & engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Vayana Network",
                "Linked In Profile Link": "https://www.linkedin.com/in/bhagvatsinh-jadeja",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Help in Setting-up Alumni Sponsored Laboratories"
            },
            {
                "Area of Expertise": "Web development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Confidosoft Solution Pvt Ltd ",
                "Linked In Profile Link": "https://www.linkedin.com/in/rishabh-teli",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Web Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/shrut-shah-953849198/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "ODOO Developer ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Aspire Softserv pvt Ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/kalpita-gaadhe-966927248",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Provide Scholarship / Financial Help to the Deserving/Needy Students"
            },
            {
                "Area of Expertise": "Software Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infor ",
                "Linked In Profile Link": "https://www.linkedin.com/in/kalgi-shah",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Machine learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/mwlite/in/het-shah-27b519198",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Software Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Cling Multi Solutions",
                "Linked In Profile Link": "https://www.linkedin.com/in/khushikatariya",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Help in Setting-up Alumni Sponsored Laboratories, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "UI/UX design and Web Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "DevSquirrel Technologies Private Limited",
                "Linked In Profile Link": "https://www.linkedin.com/in/maitri-surti-b9b1251b5",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Web",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "None",
                "Linked In Profile Link": "https://www.linkedin.com/in/apeksha-patel-1023a7276?trk=contact-info",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Project management ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Marwiz Tech PVT LTd",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshal-shah-9912b61aa",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "SDE",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "DoctorC",
                "Linked In Profile Link": "https://www.linkedin.com/in/hansil-jasoliya-712906190/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Motor Sports ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "RedBull",
                "Linked In Profile Link": "Na",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Cybersecurity ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "oday-alashoush",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development, Full stack development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infor India PVT LTD",
                "Linked In Profile Link": "https://www.linkedin.com/in/vismay-gajera-265519190",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/smit-18/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Operating system",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University",
                "Linked In Profile Link": "Na",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Web development and UI/UX Design ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Dev Squirell ",
                "Linked In Profile Link": "https://www.linkedin.com/in/vyom-shah-5831251b5",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Dsa",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pdeu",
                "Linked In Profile Link": "https://in.linkedin.com/in/shubham-kathiriya",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Artificial intelligence, machine learning, big data",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Marwiz Tech Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/mit-patel-31b968200",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "DS",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/vedant1607",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Full Stack Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Mototive Web Solutions ",
                "Linked In Profile Link": "https://www.linkedin.com/in/hardik-rathod-a59a841a5",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "J. P. Morgan Chase & Co.",
                "Linked In Profile Link": "https://www.linkedin.com/in/hariaum-babaria",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "JP Morgan Chase & Co.",
                "Linked In Profile Link": "https://www.linkedin.com/in/kevin-b-6a871318a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "BarodaWeb",
                "Linked In Profile Link": "https://www.linkedin.com/in/kohav-yadav-22a758191",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Amazon",
                "Linked In Profile Link": "https://www.linkedin.com/in/rana-priyank",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "MedKart Pharmacy",
                "Linked In Profile Link": "https://www.linkedin.com/in/rgautam320",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Web technology ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/vrinda-gohil-9421a7240/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Cybersecurity and motorsport",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU, SOT",
                "Linked In Profile Link": "https://www.linkedin.com/in/abhi-kathiria-723630126",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Web developments",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "AlphaBi",
                "Linked In Profile Link": "https://www.linkedin.com/in/patel-parth-3518b01b5/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "GrowScale Technolab",
                "Linked In Profile Link": "https://www.linkedin.com/in/rushabh-shah-5a1a7018b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Google IT-services India private Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/saumya-rangani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Machine Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "KCS inc.",
                "Linked In Profile Link": "https://www.linkedin.com/in/sachin-kumar-gupta",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Front-end development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/aditya-gandhi-585658191",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/zeel-sonara-086151202",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/aman-kumar-mandal-236bb7246/",
                "Country of Current Stay (Residence)": "Nepal",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Offer Job Placement to the BTech/MTech Students, To Help in Setting-up Alumni Sponsored Laboratories, To Provide Sponsorship for the Students' Conference/Workshops/Events, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Cyber security, machine learning, cloud computing ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, Any other",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/mwlite/in/tanvi-modi-931230159",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Help in Setting-up Alumni Sponsored Laboratories"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "DoctorC",
                "Linked In Profile Link": "https://www.linkedin.com/in/deep-patel-206b4919a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Reunion",
                "Linked In Profile Link": "https://www.linkedin.com/in/hansalms",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Data Science/ Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Indian Space Research Organization ",
                "Linked In Profile Link": "https://www.linkedin.com/in/hetanshi-dabhi",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department"
            },
            {
                "Area of Expertise": "Spring Security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Argusoft ",
                "Linked In Profile Link": "https://www.linkedin.com/in/vandanbhojani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Flutter Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/ritu-b-789318222",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development, AI ML",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDPU",
                "Linked In Profile Link": "Linkedin.com/amaangodhrawala",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Data science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Indian Space Research Organization (ISRO)",
                "Linked In Profile Link": "https://www.linkedin.com/in/badal-parmar-50563a18b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Provide Sponsorship for the Students' Conference/Workshops/Events, To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Cyber Security",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Kyoorius Conmunications Pvt. Ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/patelpreet25",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web Devlopment",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, Any other",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/jinal-patel-a2707626b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Research Projects to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Web development and security ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU, SOT",
                "Linked In Profile Link": "https://www.linkedin.com/in/parva-barot",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Blockchain & Web Technology",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/yupuday",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Ml Ai web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Locus Logistics ",
                "Linked In Profile Link": "https://www.linkedin.com/in/malay-damani9126hacks",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Programming ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Perpetual Media",
                "Linked In Profile Link": "https://www.linkedin.com/in/tanay-butala",
                "Country of Current Stay (Residence)": "Oman",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Argusoft software limited",
                "Linked In Profile Link": "https://www.linkedin.com/in/arpitthumar",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Shell Business Operations ",
                "Linked In Profile Link": "https://www.linkedin.com/in/priyanshi-pansara",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/chaitanya-chaudhary-061a66203",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Web",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/apeksha-patel-1023a7276?trk=contact-info",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Data Science, ML",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": ".",
                "Linked In Profile Link": "http://www.linkedin.com/in/aryanshah1902",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Manentia AI",
                "Linked In Profile Link": "https://www.linkedin.com/in/khushishah1",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Help in Setting-up Alumni Sponsored Laboratories, To Provide Scholarship / Financial Help to the Deserving/Needy Students, To Provide Sponsorship for the Students' Conference/Workshops/Events, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To Support in Arranging Industrial Visits for the Existing Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Software developer ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Opshub Technology ",
                "Linked In Profile Link": "https://www.linkedin.com/in/charmi-amipara-985859218",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Mobile App Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Quicko Infosoft Pvt. Ltd.",
                "Linked In Profile Link": "https://in.linkedin.com/in/dhruv-sirodaria-4279731a1",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Computer science and engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Writespace Infotech Pvt Ltd ",
                "Linked In Profile Link": "https://www.linkedin.com/in/komal-ladhva-97555321b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "ARGUSOFT IND LTD ",
                "Linked In Profile Link": "https://www.linkedin.com/in/darshan-deshani-080706206",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Help in Setting-up Alumni Sponsored Laboratories"
            },
            {
                "Area of Expertise": "Web/App Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "linkedin.com/in/vainavi-gangvekar-2860a31bb",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Software Development, Machine learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "North Carolina State University",
                "Linked In Profile Link": "https://www.linkedin.com/in/rushilv20",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Dukaan",
                "Linked In Profile Link": "https://in.linkedin.com/in/shubhporwal",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Cybersecurity and Digital Forensics",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/yogibm",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Help in Setting-up Alumni Sponsored Laboratories, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Full Stack",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Lucent Innovation",
                "Linked In Profile Link": "https://www.linkedin.com/in/smeet-patel-558654253/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infor ",
                "Linked In Profile Link": "http://linkedin.com/in/divyanshjain92",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Reelo",
                "Linked In Profile Link": "https://www.linkedin.com/in/priyank-mistry-7b7886203",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Full Stack Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Shell Business Operation",
                "Linked In Profile Link": "https://www.linkedin.com/in/ravipatel0508",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Blockchain ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Hecta Infotech",
                "Linked In Profile Link": "https://www.linkedin.com/in/yash-patel-7616ba245",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Research Projects to the BTech/MTech Students, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Machine learning, deep learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "None",
                "Linked In Profile Link": "https://www.linkedin.com/in/vrushank-ariwala-903ba51ba/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Research Projects to the BTech/MTech Students, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "software development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Infor",
                "Linked In Profile Link": "LinkedIn.com/in/prakhar-jajoo",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Web Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Cresen Solutions ",
                "Linked In Profile Link": "https://www.linkedin.com/meet-popat",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Research Projects to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Computer science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Na",
                "Linked In Profile Link": "https://www.linkedin.com/in/shyamaltgandhi",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer science and engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Impresario Global",
                "Linked In Profile Link": "https://www.linkedin.com/company/impresario-global/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Offer Job Placement to the BTech/MTech Students, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Machine learning, Artificial Intelligence, Python ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDPU",
                "Linked In Profile Link": "https://www.linkedin.com/in/vrmanav",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department"
            },
            {
                "Area of Expertise": "Web Design",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University",
                "Linked In Profile Link": "https://www.linkedin.com/in/mirepatel?trk=contact-info",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Front-End Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Maxgen Technologies ",
                "Linked In Profile Link": "https://www.linkedin.com/in/mustafa-africawala-966164173",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Software Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Panamax Infotech Limited",
                "Linked In Profile Link": "https://www.linkedin.com/in/prit-savaliya-0389a3276/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Provide Scholarship / Financial Help to the Deserving/Needy Students"
            },
            {
                "Area of Expertise": "Blockchain Development, Full Stack SD",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Shipmnts",
                "Linked In Profile Link": "https://www.linkedin.com/in/smitsakariya",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Full Stack Development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Mototive Web Solutions ",
                "Linked In Profile Link": "https://www.linkedin.com/in/hardik-rathod-a59a841a5",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Trilotech solutions ",
                "Linked In Profile Link": "https://www.linkedin.com/in/kunjan-vaghasiya-a95b751a2",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Help in Setting-up Alumni Sponsored Laboratories"
            },
            {
                "Area of Expertise": "Java, MERN Stack, Spring Boot, MySQl",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "OpsHub Technologies Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/riya-dhanwani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/jinil-shukla-556514218",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/mishal-patel-92a79423b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Zeda.io",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshitrathi6451/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Full Stack Web Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "CrestMinds",
                "Linked In Profile Link": "https://www.linkedin.com/in/saumya-patel-9484b4249",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Computer Engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Ensemble Control Incorporation ",
                "Linked In Profile Link": "https://www.linkedin.com/in/kunj-joshi-aab1961b6",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Research Projects to the BTech/MTech Students, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Help in Setting-up Alumni Sponsored Laboratories, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhyey-shah-4370a0179",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Machine Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "SSB Digital, Ahemdabad ",
                "Linked In Profile Link": "https://www.linkedin.com/in/amit-hirpara-696822229/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "SSB Digital",
                "Linked In Profile Link": "https://www.linkedin.com/in/siddharth-patel-5a73751b2",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "MERN Stack, Java, Spring Boot",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "OpsHub Technologies Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/riya-dhanwani/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Computer Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University",
                "Linked In Profile Link": "https://www.linkedin.com/in/devam-jariwala-77a187203",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "cyber security",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "none",
                "Linked In Profile Link": "https://www.linkedin.com/in/nisargmmehta/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Help in Setting-up Alumni Sponsored Laboratories, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Backend Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Alluvium IoT Solution Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/looped-riyank/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Software development (SDE)",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "DoctorC",
                "Linked In Profile Link": "https://www.linkedin.com/in/hansil-jasoliya-712906190/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer engineering ,business ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Gajendra polishing Tools ",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshang-dabhi-27564822a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To pen Articles for the Department Newsletter"
            },
            {
                "Area of Expertise": "Data Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/mahimajoshi25",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Data Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/rupisha-patel",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Machine Learning, Deep Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "L&T Technology and Services, Vadodara ",
                "Linked In Profile Link": "https://www.linkedin.com/in/viral-rupapara-b9470316a",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Software development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "capgemini",
                "Linked In Profile Link": "https://www.linkedin.com/in/harshkumar-patel1509",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "None",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "NA",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Web development, frontend development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Reverr",
                "Linked In Profile Link": "https://www.linkedin.com/in/nikita-kubavat-15122001",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Web development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Spearline India Pvt Ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/dishant-thakkar-3704831b9/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Donate Kits/Consumables/Equipment/software/etc. to the Department"
            },
            {
                "Area of Expertise": "Web development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Techdome solutions pvt ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/sahilpanchasara",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "SDE",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Samyak Infotech ",
                "Linked In Profile Link": "https://www.linkedin.com/in/bhavyadoshi918",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Web development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Copperx ",
                "Linked In Profile Link": "https://in.linkedin.com/in/dhruvil-lathiya-553010213",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Chhindia(naher faliya), Ta-Vyara,Dist-Tapi",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Gate academy",
                "Linked In Profile Link": "NA",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Capgemini ",
                "Linked In Profile Link": "https://linkedin.com/in/sagarnarsingani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "DS",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/vedant1607",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Artificial Intelligence, digital marketing, freelancing, online business",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "None",
                "Linked In Profile Link": "None",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Computer Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU Student",
                "Linked In Profile Link": "https://www.linkedin.com/in/atharva-patel-6abb92200",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Computer Engineering (ML-AI)",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/pathik-viramgama-88054120b",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Research Projects to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "DiligenceVault",
                "Linked In Profile Link": "https://www.linkedin.com/in/hemil-parmar-2a2177178/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Data Structures And Algorithms ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pirimid Fintech",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhruvilcodes",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Computer Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/manav-bhavsar/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "AI/ML",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "USC",
                "Linked In Profile Link": "https://www.linkedin.com/in/priyansh-tratiya/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.)"
            },
            {
                "Area of Expertise": "Machine learning and Deep Learning ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "L&T Technology Services, vadodara ",
                "Linked In Profile Link": "https://www.linkedin.com/in/mink-virparia",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/jainil091/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "L&T Defence ",
                "Linked In Profile Link": "https://www.linkedin.com/in/nikesh-desle-868758199/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Cerebulb India Pvt Ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/mehul-sanghvi-218961173/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data Science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Cerebulb India Pvt Ltd",
                "Linked In Profile Link": "https://www.linkedin.com/in/umesh-rathod-100669196/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "software development and problem solving",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Capgemini",
                "Linked In Profile Link": "https://www.linkedin.com/in/harsh-patel-aa19631a1/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "CSE",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "NA",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To pen Articles for the Department Newsletter, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": 4,
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University",
                "Linked In Profile Link": "https://www.linkedin.com/in/amit-das-027a51221",
                "Country of Current Stay (Residence)": "Nepal",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Provide Scholarship / Financial Help to the Deserving/Needy Students, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Support in Arranging Industrial Visits for the Existing Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Computer Science and Engineering",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NCSU",
                "Linked In Profile Link": "https://www.linkedin.com/in/divij-v-shah/",
                "Country of Current Stay (Residence)": "United States",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Cybersecurity, AI/ML",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "New York University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/dwireph-parmar-2a1b831b1",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To Support in Arranging Industrial Visits for the Existing Students"
            },
            {
                "Area of Expertise": "Software Engineer ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Vistex",
                "Linked In Profile Link": "https://www.linkedin.com/in/mayank-gupta-pdpu",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "MERN Stack Development",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "GrowBy Exx Services Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/rushil-vora-a71b37197/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Data science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech, Any other",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/yuvraj-goyal-873285204",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Computer science and engineering ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "NA",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Data Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Cerebulb ",
                "Linked In Profile Link": "https://www.linkedin.com/in/rishit-joshi-b01706123",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Cyber Security",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/divyang-chauhan-152797197/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin"
            },
            {
                "Area of Expertise": "Machine learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/richa-prajapati-728728119",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Software Engineer",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "GrowBy Exx Services Pvt. Ltd.",
                "Linked In Profile Link": "https://www.linkedin.com/in/jainil-r-patel/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Software development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhrumin-patel-9117341b4",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Summer Internship to the BTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Offer Job Placement to the BTech/MTech Students, To Help in Setting-up Alumni Sponsored Laboratories, To Provide Scholarship / Financial Help to the Deserving/Needy Students, To Provide Sponsorship for the Students' Conference/Workshops/Events, To Donate Kits/Consumables/Equipment/software/etc. to the Department, To Extend Help to the PDEU Students/Alumni in Settling at Foreign Countries (USA/UK/etc.), To Support in Arranging Industrial Visits for the Existing Students, To pen Articles for the Department Newsletter, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "CYBER SECURITY ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "-",
                "Linked In Profile Link": "https://www.linkedin.com/in/hitesh-bariya-b379631b4",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Web Development, Machine Learning",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "NA",
                "Linked In Profile Link": "https://www.linkedin.com/in/divyansh-mahida-77670a1b7/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Act as Examiners in Different Exams (including Project Exam)"
            },
            {
                "Area of Expertise": "Penetration Testing, Malware Analysis",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "PDEU",
                "Linked In Profile Link": "https://www.linkedin.com/in/dhaval-vasava-03b615277/",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Help in Curriculum Design/ Revision"
            },
            {
                "Area of Expertise": "Internal Auditing, Pentration testing",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech, M. Tech",
                "Name of the Current Organization": "PricewaPricewaterhouse Coopers Service Delivery Center",
                "Linked In Profile Link": "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Computer Science ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Publisic sapient ",
                "Linked In Profile Link": "www.linkedin.com/in/Kunj-kanani",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Job Placement to the BTech/MTech Students"
            },
            {
                "Area of Expertise": "Comupter science",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pandit Deendayal Energy University ",
                "Linked In Profile Link": "https://www.linkedin.com/in/yash-patel7108",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Speech AI",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Alstom",
                "Linked In Profile Link": "https://www.linkedin.com/in/disha-bhavsar-088923145",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "Deliver Guest Lectures (one or two sessions) During the Semester (can be Online / Offlin, To Offer Research Projects to the BTech/MTech Students, To Act as Examiners in Different Exams (including Project Exam), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline), To Offer Help in Curriculum Design/ Revision, To Support in Arranging Industrial Visits for the Existing Students, To Offer Consultancy / Testing /Projects to the Faculty Members"
            },
            {
                "Area of Expertise": "Web development ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "B.Tech",
                "Name of the Current Organization": "Pdeu ",
                "Linked In Profile Link": "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To Offer Summer Internship to the BTech Students (can be Online / Offline), To Provide Career Guidance / Mentoring to the Existing Students (can be Online / Offline)"
            },
            {
                "Area of Expertise": "Penetration Testing ",
                "1.     Highest Qualification (Select One or Many): BTech/MTech/PhD/Any other": "M. Tech",
                "Name of the Current Organization": "Hacker4Help",
                "Linked In Profile Link": "https://www.linkedin.com/in/karan-padhiyar-2b2a87155",
                "Country of Current Stay (Residence)": "India",
                "Your Willingness to help the PDEU in (Select One or Many)": "To offer a Short Course (Technical / Non-Technical) to the Existing BTech/MTech Students (can be Online / Offline), To Offer Research Projects to the BTech/MTech Students"
            }
        ]
    }

];

const removeKeyFromObjects = (array, keyToRemove) => {
    return array.map(obj => {
        const newObj = { ...obj };
        delete newObj[keyToRemove];
        return newObj;
    });
};

// Key to remove
const keyToRemove = "Your Willingness to help the PDEU in (Select One or Many)";
const updatedEntries = removeKeyFromObjects(entries, keyToRemove);
console.log(updatedEntries);


export default function Map() {
    return <div className="w-[90vw] ml-[-7vw] h-screen">
        <ComposableMap className="z-[19] scale-y-[0.8]">
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} className="fill-[#00ff7b50]" />
                    ))
                }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <Tooltip content={
                        <div className="flex flex-col">
                            <span>India</span>
                            <span>First Name, Last Name</span>
                            <span>Organization: </span>
                        </div>
                    } showArrow={true} color="success" shadow="lg">
                        <g
                            fill="none"
                            stroke="#00ff7b"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-10, -14) scale(0.5, 0.6)"
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                    </Tooltip>

                    {/* <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fill: "white", fontSize: "0.4em", fontFamily: "Helvetica" }}
                    >
                        {name}
                    </text> */}
                </Marker>
            ))}
        </ComposableMap>
    </div>
}