$('#slider').css('width','200px');

$(document).ready(function() {
    $("#slider").on("input", function() {
        var sliderValue = $(this).val();
        $("#slider-value").text(sliderValue);
    });
});

$('.block').css({
    'border': '1px solid #ccc',
    'margin-bottom': '10px',
    'color':'white',
    'background':'deepskyblue'
});

$('.content').css('display','none');

$(document).ready(function() {
    $(".header").click(function() {
        $(".content").slideUp();
        $(this).next(".content").slideDown();
    });
});

$('.tabs').css({
    'width':'1200px',
    'display':'flex',
    'justify-content':'space-between',
    'padding':'15px',
    'cursor':'pointer',
    'margin':'auto',
    'background':'green',
});

$('.tab').css({
    'color':'white'
});
$(".tab").hover(
    function() {
        $(this).css({
            "background-color": "darkgreen", 
            "color": "white" 
        });
    },
    function() {
        $(this).css({
            "background-color": "", 
            "color": "white" 
        });
    }
);
$('.tab-content').css({
    'position':'relative',
    'background':'beige',
    'display':'none',
    'padding':'10px',
    'border':'2px solid green',
    'width':'700px'
});

$('.text').css({
    'position':'absolute',
    'bottom':'250px',
    'left':'250px',
    'top':'50px'
});

$('.description').css({
    'width':'450px'
});

$(document).ready(function() {
    $(".tab").click(function() {
        var contentId = $(this).data("content");
        var $content = $("#" + contentId);

        if ($content.is(":visible")) {
            $content.slideUp();
        } else {
            $(".tab-content").slideUp();
            $content.slideDown();
        }
    });
});

$('.main-container').css({
    'margin':'150px 440px',
    'display':'flex',
    'flex-direction':'column',
    'align-atims':'center',
});

$('.form-container').css({
    'background':'#f5f5f5',
    'padding':'20px',
    'border-radius':'10px',
    'box-shadow':'0 2px 5px rgba(0, 0, 0, 0.1)',
    'max-width':'400px'
});
$('.form-title').css({
    'text-align':'center',
    'margin-bottom':'20px'
});
$('label').css({
    'display':'block',
    'margin-bottom':'5px'
});
$('input').css({
    'width':'100%',
    'padding':'5px',
    'border':'1px solid #ccc',
    'box-sizing':'border-box'
});
$('.btn').css({
    'background-color':'#4CAF50',
    'color':'#fff',
    'border':'none',
    'border-radius':'4px',
    'cursor':'pointer',
    'width':'100%',
    'padding':'10px',
    'margin-top':'15px'
});
$('.card-visual').css({
    'background-color':'pink',
    'color':'white',
    'border-radius':'10px',
    'box-shadow':'0 4px 8px rgba(0,0,0,0.2)',
    'width':'300px',
    'height':'180px',
    'position':'relative',
    'overflow':'hidden',
    'top':'-450px',
    'left':'70px'
});
$('.number').css({
    'font-family':'monospace',
    'font-size':'18px',
    'color':'white',
    'position':'absolute',
    'top':'20px',
    'left':'20px'
});
$('.name').css({
    'font-family':'sans-serif',
    'font-size':'16px',
    'color':'white',
    'position':'absolute',
    'top':'80px',
    'left':'20px',
    'text-transform':'uppercase'
});
$('.expiry').css({
    'font-family':'monospace',
    'font-size':'14px',
    'color':'white',
    'position':'absolute',
    'bottom':'20px',
    'right':'20px'
});

$("#card-form").submit(function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из полей
    const cardNumber = $("#card-number").val();
    const cardName = $("#card-name").val();
    const expiryDate = $("#expiry-date").val();

    // Обновляем визуализацию карты
    $(".card-visual .number").text(cardNumber || "**** **** **** ****");
    $(".card-visual .name").text(cardName || "Имя Фамилия");
    $(".card-visual .expiry").text(expiryDate || "MM/YY");
});
