document.querySelector('.share-icon').addEventListener('mouseenter', function() {
    document.querySelector('.share-options').style.display = 'block';
});

document.querySelector('.share-icon-container').addEventListener('mouseleave', function() {
    document.querySelector('.share-options').style.display = 'none';
});