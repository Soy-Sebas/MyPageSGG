const $navAElements: Element[] = [...document.querySelectorAll('header nav a')]

window.addEventListener('scroll', () => {
  $navAElements.forEach(a => {
    const selectionForSection = a.getAttribute('href')?.substring(1)
    const sectionElement: HTMLDivElement | null = document.querySelector(selectionForSection || '')

    if(!sectionElement) return
    const selectionTop = sectionElement.offsetTop - 150
    if(window.scrollY <= selectionTop) return
    $navAElements.forEach(aToRemove => aToRemove.classList.remove('bg-white/15'))
    a.classList.add('bg-white/15')
  })
})