(function () {
  'use string'

  var menuItems = document.getElementsByClassName('menu_item')
  var contents = document.getElementsByClassName('content')

  var i
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (e) {
      e.preventDefault() //規定の動作を無効

      var i
      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].className = ''
      }

      this.className = 'active menu_item'

      for (var i = 0; i < contents.length; i++) {
        contents[i].className = 'content'
      }

      document.getElementById(this.dataset.id).className = 'content active'

    })
  }
})()