
// handle click on each .column
document.addEventListener('DOMContentLoaded', () => {
  const selectedVideoContainer = document.querySelector('.selectedVideoAudio');
  const columns = document.querySelectorAll('.column');

  columns.forEach(column => {
    column.addEventListener('click', function (event) {
      // Prevent the click event from bubbling up if it's necessary
      event.stopPropagation();

      const videoId = this.id;

      // Ensure the video exists in the list
      if (videoList[videoId]) {
        // Remove any previous video
        selectedVideoContainer.innerHTML = '';

        // Clone the video element and append it
        const newVideo = videoList[videoId].cloneNode(true);
	    //newVideo.controls = true;
	    //newVideo.autoplay = true;
            selectedVideoContainer.appendChild(newVideo);
      }
    });
  });
});

// to handle the scrolling
const row = document.querySelector('.row');
const scrollButtonLeft = document.getElementById('scroll-left');
const scrollButtonRight = document.getElementById('scroll-right');

// Get the value of the CSS variables --column-width and --column-gap
const columnWidthRem = getComputedStyle(document.documentElement).getPropertyValue('--column-width');
const columnGapRem = getComputedStyle(document.documentElement).getPropertyValue('--column-gap');

// Convert rem to px (assuming the root font-size is 16px)
const remToPx = 16;
const columnWidthPx = parseFloat(columnWidthRem) * remToPx;  // Convert column width from rem to px
const columnGapPx = parseFloat(columnGapRem) * remToPx;      // Convert column gap from rem to px

// Calculate the full scroll distance per column (including gap)
const scrollDistance = columnWidthPx + columnGapPx;

scrollButtonLeft.addEventListener('click', function () {
  row.scrollBy({
    left: -scrollDistance,  // Scroll by the column's width plus gap
    behavior: 'smooth'  // Smooth scrolling effect
  });
});

scrollButtonRight.addEventListener('click', function () {
  row.scrollBy({
    left: scrollDistance,  // Scroll by the column's width plus gap
    behavior: 'smooth'  // Smooth scrolling effect
  });
});
