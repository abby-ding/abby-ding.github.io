$(document).ready(function () {
  // Init project grids.
  var $grid = $(".grid").masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: ".grid-item",
  });

  // Re-layout project grids after each image loads.
  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

  // The blog gallery contains images with different aspect ratios. Waiting for
  // each image prevents Masonry from positioning items using incomplete sizes
  // during a visitor's first (uncached) page load.
  var $blogGallery = $(".blog-gallery").masonry({
    percentPosition: true,
  });

  $blogGallery.imagesLoaded().progress(function () {
    $blogGallery.masonry("layout");
  });
});
