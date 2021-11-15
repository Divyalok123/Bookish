### Bookish Backend

This repo stores the back-end structure of Bookish.

Public folder contains the uploaded documents. If you are trying to run this app, public folder is needed. Make a public folder. And make three folders inside it namely: 'avatars' (for profile image), 'books' (for book files), and 'thumbs' (for thumbnails of books).

Models folder contains the schemas (kind of layout) for the database.

Config folder stores the important configurations like mongoose, passport, etc.

Routes folder contains the routes which the bookish-client will access for getting stuff.

Controllers folder contains the controllers (functions) for handling the route access.