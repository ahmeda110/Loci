How to run Loci app (31/05/2024)

1. In project directory, write npm install
2. Write npm run build.
3. Write node serverTemp.js, navigate to localhost:3000/a
4. Connect to a MongoDB deployment with URI mongodb://localhost:27017

Current features:

- A home page for browsing.
- A landing page for website information and registering.
- A server with an API for serving pages and posting registeration requests.
- A UserModel Schema for generating users in MongoDB.
- A log in feature that checks the MongoDB for valid accounts.
- Common encryption methods for passwords.