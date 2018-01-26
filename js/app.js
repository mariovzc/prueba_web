const discussions = [
  {
    title: 'The best spanish food restaurant event',
    user: 'Paz Vega',
    img: 'images/aside/discus/discus-1.png'
  },
  {
    title: 'My car needs a fix. Help me find a good shop',
    user: 'Ana Vega',
    img: 'images/aside/discus/discus-2.png'
  },
  {
    title: 'Anyone know a good place to buy a bike?',
    user: 'Johan Hem',
    img: 'images/aside/discus/discus-3.png'
  },
  {
    title: 'Help me to find the location for my new movie',
    user: 'Renee Zell',
    img: 'images/aside/discus/discus-4.png'
  }
]

function setDiscussions () {
  // 
  let html = ''
  discussions.forEach(element => {
    html += `
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-4 col-ms-12">
            <img src="${element.img}" alt="${element.user}" class="img-fluid">
          </div>
          <div class="col-md-8 col-ms-12">
            <h5><a href="javascript:void(0)" class="discuss-link-title">${element.title}</a></h5>
            <small class="text-muted">Posted by  <a href="javascript:void(0)" class="discuss-link">${element.user}</a></small>
          </div>
        </div>  
      </li>
    `
  })
  $('#discussions-list').html(html)
}

setDiscussions()