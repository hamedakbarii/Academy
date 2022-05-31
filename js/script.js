// aside-left tabs select

const tab = document.querySelectorAll('.sel')

tab.forEach((e) => {
    e.addEventListener('click', () => {
        
        for (i = 0; i < tab.length; i++){
            tab[i].classList.remove('active')
        }
            e.classList.add('active')
        
    })
})


// aside-right homework tabs select
const homeworkTabs = document.querySelectorAll('.sele')

homeworkTabs.forEach((el) => {
    el.addEventListener('click', () => {
        for (i = 0; i < homeworkTabs.length; i++){
            homeworkTabs[i].classList.remove('colored')
        }
        el.classList.add('colored')
    })
})


// calender
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const Month = document.querySelector('.monthf')
const Days = document.querySelectorAll('.dys')



prevBtn.addEventListener('click', () => {
    Month.textContent = "May"
})
nextBtn.addEventListener('click', () => {
    Month.textContent = "June"
})
Days.forEach((day => {
    day.addEventListener('click', () => {
        for (var i = 0; i < Days.length; i++){
            Days[i].classList.remove('active')
        }
        day.classList.add('active')
    })
}))