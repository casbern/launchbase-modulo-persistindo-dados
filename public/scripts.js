const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for( item of menuItems ) {
  if(currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active")
  }
}



function paginate(selectedPage, totalPage) {
  let pages = [],
      oldPage

  for(let currentPage = 1; currentPage <= totalPage; currentPage++) {
    
    const firstAndLastPage = currentPage == 1 || currentPage == totalPage 

    const pagesAfterSelectedPage = currentPage <=selectedPage + 2 

    const pagesBeforeSelectedPage = currentPage >=selectedPage - 2


    if(firstAndLastPage || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
      if(oldPage && currentPage - oldPage > 2) {
        pages.push("...")
      }

      if(oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1)
      }

      pages.push(currentPage)

      oldPage = currentPage
    }
  }    
  return pages
}

const pagination =  document.querySelector(".pagination")
console.log(pagination)

const page = +pagination.dataset.page

const total = +pagination.dataset.total
 
const pages = paginate(page, total)

console.log(pages)