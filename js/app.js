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

const places = [
  {
    title: 'Amanda Kitchen',
    text1: 'Restaurant',
    text2: '21 North Santa Cruz Ave.',
    text3: 'Hours today 11am - 10pm',
    img: 'images/places/places-1.png'
  },
  {
    title: 'Apple Store',
    text1: 'Tech',
    text2: '23N N Santa Cruz Ave.',
    text3: 'Hours today 10am - 9pm',
    img: 'images/places/places-2.png'
  },
  {
    title: 'California Cafe',
    text1: 'Restaurant/Bar',
    text2: '50 university ave.',
    text3: 'Hours today 11:30am - 10pm',
    img: 'images/places/places-3.png'
  },
  {
    title: 'Babycoo',
    text1: 'Womens/children & baby/ Apparel',
    text2: '140 west main',
    text3: 'Hours today 11am - 6pm',
    img: 'images/places/places-4.png'
  },
  {
    title: 'Caffe Delatti',
    text1: 'Coffe House / Dessert',
    text2: '42 ELm Street',
    text3: 'Hours today 10am - 10pm',
    img: 'images/places/places-5.png'
  },
  {
    title: 'Banana Republic',
    text1: 'Mens',
    text2: '25 University ave.',
    text3: 'Hours today 11am - 8pm',
    img: 'images/places/places-6.png'
  }
]

function setDiscussions () {
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
  document.getElementById('discussions-list').innerHTML = html
}

function setPlaces() {
  let html = ''
  places.forEach(element => {
    html += `
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-4">
            <img src="${element.img}" alt="${element.title}" class="img-fluid">
          </div>
          <div class="col-md-8">
            <a href="javascript:void(0)" class="orange-title"><h5>${element.title}</h5></a>
            <small class="text-muted">${element.text1}</small><br>
            <small class="text-muted">${element.text2}</small><br>
            <small class="text-muted">${element.text3}</small>   
          </div>
        </div>
        <hr>
      </div>
    `
  })
  document.getElementById('places-data').innerHTML = html
}

setDiscussions()
setPlaces()
