microBlog
=========

Microblog Using: MEAN Stack
-------------------------------------------------------

# Front-End:
 * Made with AngularJS
## index.html 
 * Views for annymous users.
## admin.html
 * CRUD operations for the posts.
 
 
# Back-End:
 * API running Node.JS + Express
 * Database with MongoDB
 
## API:
 * Node.js + Express
 * GET /api/post: returns a list of all the posts.
 * POST /api/post: inserts a new post.
 * DELETE /api/post/:postID -> Deletes the post with postID.
 
## DATABASE:
 * MongoDB
 * Post must have: { "post", "title", "date", "postId" }
 * Use ObjectID._id for "postID"
 * Use ObjectID.getTimestamp()  for "date"


# Deployment:
 * nginx serving AngularJS files, files not found going to node.js listening on 8000.

  ``` 
  location / {
      try_files $uri $uri/ @node
  }

  location @node { 
    proxy_pass http://localhost:8000; 
  }
  ```

 * complete vhost example on [a relative link](deploy/nginx.conf)
 
# TODO:
----------------------------------

* Functional Admin.html, create post and delete post functionality.
* Figure out a way to authenticate both admin.html and node.js-express with a single sign-on. (cookies?)
* Construct the database.
* what else...?
