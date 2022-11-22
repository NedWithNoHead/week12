const clickMeButton = document.querySelector('.click-me')

const handleClickme = function (event)
{
    console.log(event.target)
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
    clickMeButton.textContent = "Reload"
}
    else if (clickMeButton.textContent ==="Reload"){
        clickMeButton.textContent = "Launch ICMB"
    }
}

clickMeButton.addEventListener("click", changeText)

function createAddButton()
{
    const PurpleButton = document.createElement("button");
    PurpleButton.textContent = "Purple";
    document.body.appendChild(PurpleButton);
    PurpleButton.addEventListener('mouseover', changeBGgreen);
}
clickMeButton.addEventListener('click', createAddButton)

function addPara ()
{
    const para1 = document.createElement('p');
    para1.textContent = "Hallo";
    document.body.appendChild(para1);
    para1.addEventListener('mouseover', changeBGgreen);
}

clickMeButton.addEventListener('click', addPara)

function changeBGgreen (event)
{
    console.log(event.target)
    event.target.classList.add('green')
}

const buttonContainer = document.querySelector('.buttonContainer')
buttonContainer.addEventListener('click', changeBGgreen)

buttonContainer.addEventListener('click', changeBGtextconent)

function changeBGtextconent(event)
{
    event.target.style.color = event.target.textContent;
}

// const ohno = function ()
// {
//     alert('ohnononon');
// }

// clickMeButton.addEventListener('click', ohno)