---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 2
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

  <!-- <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div> -->

  <p>Welcome to my blog! </p>

  <!-- 图片区域，一行三列 -->
  <div class="row" data-masonry='{"percentPosition": true }'>
    <div class="col-6 col-md-4 mb-3">
      <img src="/assets/abby-img/1.jpg" class="img-fluid w-100" alt="image1" style="object-fit: cover;">
    </div>
    <div class="col-6 col-md-4 mb-3">
      <img src="/assets/abby-img/2.jpg" class="img-fluid w-100" alt="image2" style="object-fit: cover;">
    </div>
    <div class="col-6 col-md-4 mb-3">
      <img src="/assets/abby-img/3.JPG" class="img-fluid w-100" alt="image3" style="object-fit: cover;">
    </div>
    <div class="col-6 col-md-4 mb-3">
      <img src="/assets/abby-img/4.JPG" class="img-fluid w-100" alt="image4" style="object-fit: cover;">
    </div>
    <div class="col-6 col-md-4 mb-3">
      <img src="/assets/abby-img/5.JPG" class="img-fluid w-100" alt="image5" style="object-fit: cover;">
    </div>
  </div>

</div>