$ ->
  $(".hamburger").click (e) ->
    toggleDoc()
    toggleLock()
    toggleMenu()
    e.preventDefault()
    return

  $(".nav .web").click (e) ->
    toggleDoc()
    toggleLock()
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
    $(".bg").toggle()
    return

  toggleMenu = ->
    $(".nav").toggle()
    return

  hideMenu = ->
    $(".nav").hide()
    return

  return
