---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>

  <p>Welcome to my blog! Here I share my thoughts and experiences in the field of Artificial Intelligence, Human-Computer Interaction, and immersive technologies like AR/VR. Stay tuned for more updates!</p>

  <div class="row">
    <div class="col-sm-6 mb-4">
      <img src="/assets/abby-img/1.HEIC" class="img-fluid" alt="image1" style="object-fit: cover;">
    </div>
    <div class="col-sm-6 mb-4">
      <img src="/assets/abby-img/2.HEIC" class="img-fluid" alt="image2" style="object-fit: cover;">
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-4 mb-4">
      <img src="assets/abby-img/3.JPG" class="img-fluid" alt="image3" style="object-fit: cover;">
    </div>
    <div class="col-sm-8 mb-4">
      <img src="assets/abby-img/4.JPG" class="img-fluid" alt="image4" style="object-fit: cover;">
    </div>
  </div>

</div>