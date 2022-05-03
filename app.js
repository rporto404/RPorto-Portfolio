$(() => {
  hideBioAll()
  $('#1').on('click', showBio1);
  $('#2').on('click', showBio2);
  $('#3').on('click', showBio3);
  $('#4').on('click', showBio4);
  $('#5').on('click', hideBio1);
  $('#6').on('click', hideBio2);
  $('#7').on('click', hideBio3);
  $('#8').on('click', hideBio4);

  const $openBtn1 = $('#openModal1')
  const $openBtn2 = $('#openModal2')
  const $openBtn3 = $('#openModal3')
  const $openBtn4 = $('#openModal4')
  const $modal1 = $('#modal1')
  const $modal2 = $('#modal2')
  const $modal3 = $('#modal3')
  const $modal4 = $('#modal4')
  const $closeBtn1 = $('#close1')
  const $closeBtn2 = $('#close2')
  const $closeBtn3 = $('#close3')
  const $closeBtn4 = $('#close4')
  const openModal1 = () => {
    $modal1.css('display', 'block')
  }
  const openModal2 = () => {
    $modal2.css('display', 'block')
  }
  const openModal3 = () => {
    $modal3.css('display', 'block')
  }
  const openModal4 = () => {
    $modal4.css('display', 'block')
  }
  const closeModal1 = () => {
    $modal1.css('display', 'none')
  }
  const closeModal2 = () => {
    $modal2.css('display', 'none')
  }
  const closeModal3 = () => {
    $modal3.css('display', 'none')
  }
  const closeModal4 = () => {
    $modal4.css('display', 'none')
  }
  $openBtn1.on('click', openModal1)
  $openBtn2.on('click', openModal2)
  $openBtn3.on('click', openModal3)
  $openBtn4.on('click', openModal4)
  $closeBtn1.on('click', closeModal1)
  $closeBtn2.on('click', closeModal2)
  $closeBtn3.on('click', closeModal3)
  $closeBtn4.on('click', closeModal4)
})
const hideBioAll = () => {
  $("#5").hide()
  $("#6").hide()
  $("#7").hide()
  $("#8").hide()
  $("#childhood").hide()
  $("#teenage").hide()
  $("#adult").hide()
  $("#current").hide()
}
const showBio1 = () => {
  $("#childhood").show()
  $("#1").hide()
  $("#5").show()
}
const showBio2 = () => {
  $("#teenage").show()
  $("#2").hide()
  $("#6").show()
}
const showBio3 = () => {
  $("#adult").show()
  $("#3").hide()
  $("#7").show()
}
const showBio4 = () => {
  $("#current").show()
  $("#4").hide()
  $("#8").show()
}
const hideBio1 = () => {
  $("#childhood").hide()
  $("#5").hide()
  $("#1").show()
}
const hideBio2 = () => {
  $("#teenage").hide()
  $("#6").hide()
  $("#2").show()
}
const hideBio3 = () => {
  $("#adult").hide()
  $("#7").hide()
  $("#3").show()
}
const hideBio4 = () => {
  $("#current").hide()
  $("#8").hide()
  $("#4").show()
}
