## Table of Contents
1.  Overview
2.  Ideation
3.  Goals for Milestones
4.  References Used
5.  Project Logbook

## 1. Overview ##
### Feedbaker is an _online audience response system_. ###
Our project introduces an easy and convenient way for presenters to get instance feedback from their audience. Professors, teaching assistants or students can use Feedbaker during lessons and presentations to gather responses from their audience for purposes such as to assess the general understanding of the audience, or to conduct a live quiz.

Traditionally, this would require expensive infrastructure and hardware. Feedbaker effectively eliminates the need for a audience response device which is costly to acquire. Instead, the audience can use devices that they already own (such as their smartphone or laptops) to respond to questions set out by the presenter.

We hope that our project (in its simplicity) is able to address some of the abovementioned concerns and provide an alternate way for people to do surveys and polls. This platform is currently set to authenticate with NUS OpenID, but can easily be extended to authenticate with other OpenID providers.

Our target level of achievement: *Level II: Gemini*.

*   [Link to Ignition Video](http://www.youtube.com/watch?v=_YJRpfyxP4c&amp;feature=share&amp;t=1h35m22s "Link to Ignition video")
*   [Link to Ignition slide](http://goo.gl/C1Tvzn "Link to Ignition slide")

## 2. Ideation ##
User Stories:
*   As a presenter, I want to be able to conduct live polls during my presentation to have increased interaction with my audience.
*   As a presenter, I want to be able to get realtime feedback to make my presentations interesting and to facilitate fluid discussions.
*   As a user, I want to be able to create a simple votable question so as to make decisions based on popularity. (many possible uses for decision making)
*   As a user, I want to keep track of the polls I've conducted so that I can remember what the results were.
*   As a student, I want to forget about the hassle of keeping a 100 dollar responder device for my surveys in class.
*   As a teaching staff, I want to get simple feedback quickly and as painlessly as possible without resorting to IVLE quizzes and forums.

Distilling from these user stories, we have identified a few core features that the polling system would need to have:

*   Multiple choice questions and answers
*   Live charts results display
*   Real-time results feedback
*   Poll management system

Extensions to this project may include:

*   Open project out to anyone to use
*   Choice of Data Visualisation (Pie, Line, etc)
*   "Youtube Live Comments" concept of open-ended results (comments)

A complete description and outline of our plans and decisions have been consolidated in a table which you may view [here](http://goo.gl/1mnS0s).

## 3. Goals for Milestones ##
A planned timeline of our project roadmap can be found [here](http://goo.gl/X7LK89).

## 4. References Used ##
For this project, we depend heavily on the use of documentation on the following technologies (this list can also be found [here](https://docs.google.com/spreadsheets/d/19Z10ABm60u2SgbVTDspKD25QC-5OAaQuISV3YUIcu9c/edit#gid=1488577875)):

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OS</td>
      <td><a href="http://ubuntu.com">Ubuntu</a></td>
    </tr>
    <tr>
      <td>Platform</td>
      <td><a href="http://node.js">NodeJS</a></td>
    </tr>
    <tr>
      <td>Server</td>
      <td><a href="http://expressjs.com">ExpressJS</a></td>
    </tr>
    <tr>
      <td>Server (Reverse Proxy)</td>
      <td><a href="http://nginx.org">Nginx</a></td>
    </tr>
    <tr>
      <td>Database</td>
      <td><a href="http://mongodb.org">MongoDB</a></td>
    </tr>
    <tr>
      <td>JavaScript MVW Framework</td>
      <td><a href="http://angularjs.org">AngularJS</a></td>
    </tr>
    <tr>
      <td>Front-end UI Framework</td>
      <td><a href="http://getbootstrap.com">Bootstrap</a></td>
    </tr>
    <tr>
      <td>Authentication</td>
      <td><a href="https://openid.nus.edu.sg/about/developers">NUS OpenID</a></td>
    </tr>
    <tr>
      <td>Version Control</td>
      <td><a href="https://github.com/lauweijie/feedbaker">Github</a></td>
    </tr>
    <tr>
      <td>Project Blog</td>
      <td><a href="http://orbital.jon.sg/">orbital.jon.sg</a></td>
    </tr>
  </tbody>
</table>

A complete list of the JavaScript packages and libraries which we have used in this project can be found in the following files in our [Git repository](https://github.com/lauweijie/feedbaker "Git respository"):

*   [package.json](https://github.com/lauweijie/feedbaker/blob/master/package.json "package.json")
*   [bower.json](https://github.com/lauweijie/feedbaker/blob/master/bower.json "bower.json")

## 5. Project Logbook ##
For all purposes and documentation of the lessons learnt and discoveries in this project, we have kept a journal that you may browse at our:

*Project Blog*: [Feedbaker - NUS Orbital Project](http://orbital.jon.sg/)
A summary of the number of hours as well as a full description and the substantiation to our progress and learning experiences have been meticulously compiled and presented for sharing in the following spreadsheet:

*Google Spreadsheet*: [[NUS Orbital 2014] Team Jonathans: Project Log](http://goo.gl/tDnbL5)

As of the first Milestone, the total number of hours logged for both members:
*   [Jonathan Lau](http://jon.sg/): 144 hours
*   [Jonathan Tan](http://jhowt.com/): 113 hours

As of the second Milestone, the total number of hours logged for both members:
*   [Jonathan Lau](http://jon.sg/): 150 hours
*   [Jonathan Tan](http://jhowt.com/): 137 hours

As of the third Milestone, the total number of hours logged for both members:
*   [Jonathan Lau](http://jon.sg/): 197 hours
*   [Jonathan Tan](http://jhowt.com/): 154 hours

Team total hours: 351 hours
