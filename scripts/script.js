const clickMeButton = document.querySelector('.click-me')

const handleClickme = function ()
{
    alert('What a rebel! Good for you!');
    // clickMeButton.removeEventListener('click', handleClickme);
}

clickMeButton.addEventListener('click', handleClickme, {once:true})


// const ohno = function ()
// {
//     alert('fuck');
// }

// clickMeButton.addEventListener('click', ohno)