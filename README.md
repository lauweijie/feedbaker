<h2>1. Overview</h2>
<h3>Feedbaker is an <em>online audience response system</em>.</h3>
<p>Our project idea basically addresses polling (or getting feedback), which professors and teaching assistants can use during lessons to gather responses for purposes such as to assess the general understanding of the audience, or to conduct a live quiz.</p>
<p>Effectively it eliminates the need for a responder device which is costly to replace. Students and teachers alike thus have alleviated worries about the operational and logistical concerns of said device.</p>
<p>We hope that our project (in its simplicity) is able to address some of the concerns and provide an alternate way for people to do surveys/polls, and perhaps extend it to others (apart from NUS OpenID users) as part of keeping this open source.</p>
<p>Our target level of achievement is to achieve Level II: Gemini.</p>
<ul>
<li><a title="Link to Ignition Video" href="http://www.youtube.com/watch?v=_YJRpfyxP4c&amp;feature=share&amp;t=1h35m22s">Link to Ignition video</a></li>
<li><a href="http://jon.sg/f/feedbaker.pdf">Link to Ignition slide</a></li>
</ul>
<h2>2. Ideation</h2>
<p>User Stories:</p>
<ul>
<li>As a presenter, I want to be able to conduct live polls during my presentation to have increased interaction with my audience.</li>
<li>As a presenter, I want to be able to get realtime feedback to make my presentations interesting and to facilitate fluid discussions.</li>
<li>As a user, I want to be able to create a simple votable question so as to make decisions based on popularity. (many possible uses for decision making)</li>
<li>As a user, I want to keep track of the polls I&rsquo;ve conducted so that I can remember what the results were.</li>
<li>As a student, I want to forget about the hassle of keeping a 100 dollar responder device for my surveys in class.</li>
<li>As a teaching staff, I want to get simple feedback quickly and as painlessly as possible without resorting to IVLE quizzes and forums.</li>
</ul>
<p>Distilling these user stories, we have identified a few core features that the polling system would need to have:</p>
<ul>
<li>Multiple choice questions and answers</li>
<li>Live charts results display</li>
<li>Real-time results feedback</li>
<li>Poll management system</li>
</ul>
<p>Extensions to this project may include:</p>
<ul>
<li>Choice of Data Visualisation</li>
<li>Choice of open-ended answers</li>
<li>&lsquo;Chat room&rsquo; concept of open-ended results</li>
</ul>
<p>A complete description and outline of our plans and decisions have been consolidated in a table which you may view <a href="http://goo.gl/1mnS0s">here</a>.</p>
<h2><strong>3. Goals for Milestones</strong></h2>
<p>A planned timeline of our project roadmap can be found <a href="http://goo.gl/X7LK89">here</a>.</p>
<h2>4. References Used</h2>
<p>For this project, we depend heavily on the use of documentation on the following technologies (this list can also be found <a href="https://docs.google.com/spreadsheets/d/19Z10ABm60u2SgbVTDspKD25QC-5OAaQuISV3YUIcu9c/edit#gid=1488577875">here</a>):</p>
<table>
<tbody>
<tr>
<td>
<p><strong>Component</strong></p>
</td>
<td>
<p><strong>Technology</strong></p>
</td>
<td>
<p><strong>URL</strong></p>
</td>
</tr>
<tr>
<td>
<p>Front-End</p>
</td>
<td>
<p>AngularJS</p>
</td>
<td>
<p><a href="http://angularjs.org">AngularJS.org</a></p>
</td>
</tr>
<tr>
<td>
<p>Server</p>
</td>
<td>
<p>ExpressJS</p>
</td>
<td>
<p><a href="http://expressjs.com">ExpressJS.com</a></p>
</td>
</tr>
<tr>
<td>
<p>Database</p>
</td>
<td>
<p>MongoDB (NoSQL)</p>
</td>
<td>
<p><a href="http://mongodb.org">MongoDB.org</a></p>
</td>
</tr>
<tr>
<td>
<p>Platform</p>
</td>
<td>
<p>NodeJS</p>
</td>
<td>
<p><a href="http://node.js">Node.js</a></p>
</td>
</tr>
<tr>
<td>
<p>OS</p>
</td>
<td>
<p>Linux (Ubuntu)</p>
</td>
<td>
<p><a href="http://ubuntu.com">Ubuntu.com</a></p>
</td>
</tr>
<tr>
<td>
<p>Git Repository</p>
</td>
<td>
<p>Github</p>
</td>
<td>
<p><a href="https://github.com/lauweijie/feedbaker">https://github.com/lauweijie/feedbaker</a></p>
</td>
</tr>
<tr>
<td>
<p>Project Blog</p>
</td>
<td>
<p>Wordpress</p>
</td>
<td>
<p><a href="http://orbital.jon.sg/">http://orbital.jon.sg/</a></p>
</td>
</tr>
<tr>
<td>
<p>Templating Framework</p>
</td>
<td>
<p>Bootstrap/Wrapbootstrap/Bootswatch</p>
</td>
<td>
<p><a href="http://getbootstrap.com">http://getbootstrap.com</a></p>
</td>
</tr>
<tr>
<td>
<p>Authentication</p>
</td>
<td>
<p>OpenID + Passport.js</p>
</td>
<td>
<p><a href="https://openid.nus.edu.sg/about/developers">https://openid.nus.edu.sg/about/developers</a></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>A complete list of the javascript packages and libraries which we have used in this project can be found in the following files in the <a href="https://github.com/lauweijie/feedbaker">Git repository</a>:</p>
<ul>
<li>package.json</li>
<li>bower.json</li>
</ul>
<h2>5. Project Logbook</h2>
<p>For all purposes and documentation of the lessons learnt and discoveries in this project, we have kept a journal that you may browse at our:</p>
<p><strong>Project Blog</strong>: <a href="http://orbital.jon.sg/">Feedbaker - NUS Orbital Project</a></p>
<p>A summary of the number of hours as well as a full description and the substantiation to our progress and learning experiences have been meticulously compiled and presented for sharing in the following spreadsheet:</p>
<p><strong>Google Spreadsheet</strong>: <a href="http://goo.gl/tDnbL5">[NUS Orbital 2014] Team Jonathans: Project Log</a></p>
<p>As of the first Milestone, the total number of hours logged for both members:</p>
<ul>
<li><a href="http://jon.sg/">Jonathan Lau</a>: 139 hours</li>
<li><a href="http://jhowt.com/">Jonathan Tan</a>: 108 hours</li>
</ul>
<p>Team total hours: 247 hours</p>
