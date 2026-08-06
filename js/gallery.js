/*Name this external file gallery.js*/

function upDate(previewPic){
    // Step 1: Check that the event is triggering
    console.log('upDate called');
    
    // Step 2: Print out information about the previewPic variable (alt and src)
    console.log('previewPic alt:', previewPic.alt);
    console.log('previewPic src:', previewPic.src);

    // Get the element with id "image"
    var imageDiv = document.getElementById('image');
    
    // Step 3: Change the background image of the div with id "image"
    imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')';
    
    // Step 4: Change the text of the element with id "image"
    imageDiv.textContent = previewPic.alt;
}

function unDo(){
    // Check that unDo is triggering
    console.log('unDo called');

    // Get the element with id "image"
    var imageDiv = document.getElementById('image');
    
    // Step 5: Update the background image back to original url('')
    imageDiv.style.backgroundImage = "url('')";
    
    // Step 6: Update the text back to original text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}