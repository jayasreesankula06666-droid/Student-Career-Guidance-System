const careers = [
 {name:"Software Developer",interests:["technology","research"],subjects:["Computer Science","Mathematics","Science"],strengths:["analytical","practical"],skills:"Programming, problem-solving, teamwork",next:"Try a beginner programming course and build a small website or app."},
 {name:"Data Analyst",interests:["technology","research","business"],subjects:["Mathematics","Computer Science","Commerce"],strengths:["analytical","practical"],skills:"Spreadsheets, statistics, data visualization",next:"Practice spreadsheets and learn basic statistics or Python."},
 {name:"Teacher or Educator",interests:["people","creative"],subjects:["Arts and Languages","Mathematics","Science","Social Studies"],strengths:["communication","care"],skills:"Communication, subject knowledge, patience",next:"Explain a topic to a friend and explore teaching pathways."},
 {name:"Healthcare Professional",interests:["people","research"],subjects:["Biology","Science"],strengths:["care","analytical"],skills:"Empathy, careful observation, science",next:"Explore healthcare roles and check official course and eligibility requirements."},
 {name:"Graphic or UI Designer",interests:["creative","technology"],subjects:["Arts and Languages","Computer Science"],strengths:["creative","practical"],skills:"Visual communication, design tools, user empathy",next:"Create a poster or simple app screen and collect feedback."},
 {name:"Business or Marketing Professional",interests:["business","creative","people"],subjects:["Commerce","Mathematics","Arts and Languages"],strengths:["leadership","communication"],skills:"Communication, planning, analysis",next:"Plan a small school event or mock product campaign."},
 {name:"Research Scientist",interests:["research","nature"],subjects:["Science","Biology","Mathematics"],strengths:["analytical","practical"],skills:"Curiosity, experiments, data analysis",next:"Choose a science question and research it using reliable sources."},
 {name:"Environmental Specialist",interests:["nature","research"],subjects:["Science","Biology","Social Studies"],strengths:["care","analytical","practical"],skills:"Observation, sustainability, research",next:"Try a local waste or water-use observation project."},
 {name:"Entrepreneur or Project Manager",interests:["business","people","technology"],subjects:["Commerce","Mathematics","Computer Science"],strengths:["leadership","communication","practical"],skills:"Planning, teamwork, budgeting",next:"Identify a problem at school and design a simple solution."},
 {name:"Writer or Communication Specialist",interests:["creative","people"],subjects:["Arts and Languages","Social Studies"],strengths:["communication","creative"],skills:"Writing, research, storytelling",next:"Create a short article, blog, or presentation on a topic you enjoy."}
];
const form=document.getElementById("career-form"),results=document.getElementById("results");
form.addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("student-name").value.trim();
 const subject=document.getElementById("subject").value;
 const interest=document.getElementById("interest").value;
 const education=document.getElementById("education").value;
 const strengths=[...document.querySelectorAll('input[name="strength"]:checked')].map(x=>x.value);
 if(!strengths.length){alert("Please choose at least one strength.");return;}
 const ranked=careers.map(c=>({...c,score:(c.interests.includes(interest)?4:0)+(c.subjects.includes(subject)?3:0)+c.strengths.filter(s=>strengths.includes(s)).length*2})).sort((a,b)=>b.score-a.score).slice(0,3);
 results.innerHTML=`<h3>${name?`Great to meet you, ${escapeHTML(name)}!`:"Your career ideas"}</h3><p>Based on your answers (${escapeHTML(education)}), here are three paths to explore. These are suggestions, not a fixed ranking of your potential.</p><div>${ranked.map((c,i)=>`<article class="match"><h4>${i+1}. ${c.name}</h4><p>${c.skills}</p><small>Suggested next step: ${c.next}</small></article>`).join("")}</div><p class="note">Consider your values, opportunities, costs, course requirements, and advice from a trusted teacher or career counselor.</p>`;
 results.hidden=false;results.scrollIntoView({behavior:"smooth",block:"start"});
});
function escapeHTML(value){return value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
