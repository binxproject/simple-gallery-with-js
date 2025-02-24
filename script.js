const container = document.querySelector('.container');
const showPict = document.querySelector('.show-pict');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if(e.target.classList.contains('thumb')) {
        showPict.src = e.target.src; 
        thumbs.forEach(function(e) {
            if(e.classList.contains('active')) {
                e.classList.remove('active');
            }
        });
        e.target.classList.add('active');
    };
});