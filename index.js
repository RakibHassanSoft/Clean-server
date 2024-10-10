const express = require("express");
const app = express();
const cors = require('cors');
const educationRoute=require('./Education/EducationRoute')
const LanguageRoute=require("./Languages/LanguageRoute")
 const ExperienceRoute=require("./Experience/ExperienceRoute")
const AwardRoute=require('./Awards/AwardsRoute')
const CareerObjectiveRoute=require('./CareerObjective/CareerObjectiveRoute')
const NameContactRoute=require('./NameAndContact/NameContactRoute')
const ProjectsRoute=require('./Project/ProjectsRoute')
const SkillRoute=require('./Skills/skillsRoute')
const SummaryRoute=require('./Summary/SummaryRoute')
const TitleRoute=require('./Title/TitleRoute')
const JobPosting=require('./JobPosting/jobPOstingRoute')
const certificatesRoutes = require("./Certificates/CertificateRoute")
const formDataRoutes = require('./FormData/formDataRoutes');

const connectDB=require("./Config/dbConfig")
 
require("dotenv").config();
connectDB()
// Middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());
//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});

// Name
app.use("/api", NameContactRoute);
// Career Objective
app.use("/api",CareerObjectiveRoute);
// skills
app.use("/api", SkillRoute);
// Projects 
app.use("/api", ProjectsRoute);
// education
app.use("/api",educationRoute )
// language
app.use("/api",LanguageRoute )
// experience
app.use("/api",ExperienceRoute )
// Certificate
app.use('/api', certificatesRoutes); 
//for job posting
app.use('/api', JobPosting); 


// Awards 
app.use("/api", AwardRoute )


// Summary
app.use("/api", SummaryRoute);

// title
app.use("/api", TitleRoute);







app.use("/api", formDataRoutes);


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




//// userId:  k7Fs6Hfy9CWjLe2h6A42H2DAZxg2