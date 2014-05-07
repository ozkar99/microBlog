microBlog
=========

Microblog Using: MEAN Stack
-------------------------------------------------------

# Front-End:
 * Made with AngularJS

 
# Back-End:
 * API running Node.JS + Express
 * Database with MongoDB
 
## API:
 * Node.js + Express
 * GET /api/post: returns a list of all the posts.
 * POST /api/post: inserts a new post.

 
## DATABASE:
 * MongoDB
 * Post must have: { "post", "title", "author" }


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

 * complete vhost example [here](deploy/nginx.conf)
