$ ->
  $(".thumb").click (e) ->
    imgClicked = $(this).attr("data-id")
    setModalContent imgClicked
    e.preventDefault()
    return

  $(".close").click (e) ->
    hideModal()
    e.preventDefault()
    return

  $(".overlay").click ->
    hideModal()
    return

  setModalContent = (id) ->
    $(".modal img").attr "src", "../img/" + id + ".jpg"
    showModal()
    return

  showModal = (id) ->
    $(".overlay").removeClass "hide"
    $(".modal").removeClass "hide"
    return

  hideModal = ->
    $(".overlay").addClass "hide"
    $(".modal").addClass "hide"
    return

  return
