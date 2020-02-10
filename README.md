# api-for-koss-selection

#  html
html basically has two div's header and footer,
in which header has the main card conataing the 600x600 image and its title.
I have also added two arrows to toggle between different cards.

in footer , i have 9 small images in which the middle image is the main image.
then the main image has 4 next images on its right & 4 previous images on its left.

#  css
i designed css after taking ideas whatsapp webpage image viewer.
i have completely designed the css by myself and bootstrap isn't used anywhere.

#  JavaScript
the json data received by using fetch API is basically an array.
so i have taken the index of array as variable
and when the arrow keys get clicked,it calls a function in javascript which increases or decreases the index of the arrow.
To make the cards in continum i have also used the length of the array by using (data.length)
