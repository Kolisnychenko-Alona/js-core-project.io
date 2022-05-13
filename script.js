$(function () {

    let mass = ['0px 0px', '-75px 0px', '-150px 0px', '-225px 0px', '0px -75px', '-75px -75px', '-150px -75px', '-225px -75px', '0px -150px', '-75px -150px', '-150px -150px', '-225px -150px', '0px -225px', '-75px -225px', '-150px -225px', '-225px -225px'];
    let mass2;
    mass2 = mass.map(function (elem) {
        return [Math.random(), elem]
    }).sort().map(function (elem) {
        return elem[1]
    })
    $('#start-box').css('background-image', 'none')
    $('.box').each(function (index, elem) {
        $(elem).css('background-image', 'url(image.jpg)')
            
        $(elem).css('background-position', `${mass2[index]}`)
    })

    $('.modal-message').css('left', (window.innerWidth - $('.modal-message').width()) / 2)

    let startFunction = false

    $('.greed').sortable({
        connectWith: '.box-end, .box',
        cursor: 'pointer',
        start: function () {
            if (startFunction === false) {
                console.log(startFunction)
                $('#check').attr('disabled', false);
                $('#start').attr('disabled', true);
                sec = 59
                idInterval = setInterval(timer, 1000)
                $('#start').css('background-color', 'rgb(241, 70, 70)')
                startFunction = true
            }
            console.log(startFunction)
        }
    })
        
    let idInterval;
    let sec;
    let timer;
    timer = function () {
        if (sec == 0) {
            $('.timer').html(`00:0${sec}`);
            $('#check').attr('disabled', true);
            $('#check').css('background-color', 'rgb(241, 70, 70)')
            $('.modal').css('display', 'block')
            $('.modal-message').animate({
                top: 80
            }, { duration:500, queue: false})
            $('.loose').css('display', 'block')
            $('.check-time').css('display', 'none')
            $('#close').css('display', 'block')
            $('.check').css('display', 'none')
            clearInterval(idInterval)
        } else if (sec < 10 & sec > 0) {
            $('.timer').html(`00:0${sec}`);
        } else {
            $('.timer').html(`00:${sec}`);
            $('.check-time').html(`You still have time, you sure? 00:${sec}`)
        }
        sec--;
    };
    
    let startGame = function () {
        if (startFunction === false) {
            $('#check').attr('disabled', false);
        $('#start').attr('disabled', true);
        sec = 59
        idInterval = setInterval(timer, 1000)
            $('#start').css('background-color', 'rgb(241, 70, 70)')
        startFunction = true
        }
        console.log(startFunction)
    }

    $('#start').on('click', startGame)

    $('#check').on('click', function () {
        $('.modal-message').animate({
            top: 80
        }, { duration:500, queue: false})
        $('.modal').css('display', 'block')
        $('.check-time').css('display', 'block')
        $('.check').css('display', 'block')
        $('#close').css('display', 'block')
        

    })
    $('#close').on('click', function () {
        console.log('work')
        $('.modal-message').animate({
                top: -200
        }, 500, function () {
            $('.modal').css('display', 'none')
        })
        $('.check-time').css('display', 'none')
        $('.check').css('display', 'none')
        $('#close').css('display', 'none')
        $('#start').attr('disabled', true);
        $('#start').css('background-color', 'rgb(241, 70, 70)')
    })
    $('.check').on('click', function () {
        let checkMass = [];
        $('.box').each(function (index, elem) {
           checkMass.push($(elem).css('background-position'))
        })
        clearInterval(idInterval)
        let check = true
        for (let i = 0; i < checkMass.length; i++){
            if (checkMass[i] != mass[i]) {
                check = false;
                break;
            }
        }
        $('.modal').css('display', 'block')
        $('.modal-message').animate({
                top: 20
            },{ duration:500, queue: false})
        $('.check-time').css('display', 'none') 
        $('.check').css('display', 'none')
        $('#close').css('display', 'block')
        $('#close').css('display', 'block')
        $('#check').attr('disabled', true);
        $('#check').css('background-color', 'rgb(241, 70, 70)')
        if (check) {
            $('.win').css('display', 'block')
        }
        else { 
            $('.loose').css('display', 'block')  
        }
       
    })
    
    $('#new').on('click', function () {
        location.reload()
    })


})