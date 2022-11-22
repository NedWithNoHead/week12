const clickMeButton = document.querySelector('.click-me')

const handleClickme = function ()
{
    alert('China is gone');
    // clickMeButton.removeEventListener('click', handleClickme);
}

clickMeButton.addEventListener('click', handleClickme, {once:true})

// clickMeButton.addEventListener('click', handleClickme, {once:true})


const changeBG = function ()
{
    // document.body.style.backgroundColor = "pink"
    document.body.classList.add("pink");
}

clickMeButton.addEventListener('click', changeBG)

function changeText()
{
    if (clickMeButton.textContent === "Launch ICMB"){
    clickMeButton.textContent = "Reloading"
}
    else if (clickMeButton.textContent ==="Reloading"){
        clickMeButton.textContent = "Launch ICMB"
    }
}

clickMeButton.addEventListener("click", changeText)

// const ohno = function ()
// {
//     alert('ohnononon');
// }

// clickMeButton.addEventListener('click', ohno)