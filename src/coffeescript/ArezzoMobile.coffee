$ ->
  $(".hamburger").click (e) ->
    toggleDoc()
    toggleLock()
    toggleOverlay()
    showMenu()
    e.preventDefault()
    return

  $(".nav a").on "click", (e) ->
    toggleDoc()
    toggleLock()
    toggleOverlay()
    hideMenu()
    e.preventDefault()
    return

  toggleDoc = ->
    $(".doc").toggleClass "open"
    return

  toggleLock = ->
    $("body, html").toggleClass "lock"
    return

  toggleOverlay = ->
    $(".bg").toggleClass "hide"
    return

  showMenu = ->
    $(".nav").show()
    return

  hideMenu = ->
    $(".nav").hide()
    return

  return
