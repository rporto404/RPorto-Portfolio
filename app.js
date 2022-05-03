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

  $('#openModal1').on('click', openModal1)
  $('#openModal2').on('click', openModal2)
  $('#openModal3').on('click', openModal3)
  $('#openModal4').on('click', openModal4)
  $('#close1').on('click', closeModal1)
  $('#close2').on('click', closeModal2)
  $('#close3').on('click', closeModal3)
  $('#close4').on('click', closeModal4)

  let currentImgIndex = 0
  const numOfImages = $('.imgSet2').children().length - 1
  $('.next').on('click', () => {
    $('.imgSet2').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
      currentImgIndex ++
    } else {
      currentImgIndex = 0
    }
    $('.imgSet2').children().eq(currentImgIndex).css('display', 'block')
  })
  $('.previous').on('click', () => {
    $('.imgSet2').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
      currentImgIndex --
    } else {
      currentImgIndex = numOfImages
    }
    $('.imgSet2').children().eq(currentImgIndex).css('display', 'block')
  })
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
const openModal1 = () => {
  $('#modal1').css('display', 'block')
}
const openModal2 = () => {
  $('#modal2').css('display', 'block')
}
const openModal3 = () => {
  $('#modal3').css('display', 'block')
}
const openModal4 = () => {
  $('#modal4').css('display', 'block')
}
const closeModal1 = () => {
  $('#modal1').css('display', 'none')
}
const closeModal2 = () => {
  $('#modal2').css('display', 'none')
}
const closeModal3 = () => {
  $('#modal3').css('display', 'none')
}
const closeModal4 = () => {
  $('#modal4').css('display', 'none')
}
