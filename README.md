# Codecademy-Boss-Machine-API
## Project Overview

In this project, I created an entire API to serve information to a Boss Machine, a umanagement application. I created routes to manage your 'minions', your brilliant 'million dollar ideas', and to handle all the meetings that keep getting added to schedule.

You can view a video demonstration of the final app here:

<video width="100%" height="100%" controls>
   <source src="https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov" type="video/mp4">

## Implementation Details

Codecademy provided the front-end side of the project and the template. To complete the project, I complated the code in a few sections of the project.

- All routes  live inside the **server** folder.
- The 'database' exists in **server/db.js**. The beginning database will be seeded every time the server is restarted. 
#### Routes Required

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.
