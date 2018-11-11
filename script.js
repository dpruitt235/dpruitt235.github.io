var ThemeSwitch = document.getElementById("themeSelector");

function changeText(){
    if( $('#themeSelector:checked').val() == "on"){ //light
        $('.Color-Text').each(function() {
            $(this).removeClass('Color-Text-Dark');
            $(this).addClass('Color-Text-Light');
        });
        $('body').removeClass('bg-dark');
    }else{ //dark
        $('.Color-Text').each(function() {
            $(this).removeClass('Color-Text-Light');
            $(this).addClass('Color-Text-Dark');
            $('body').addClass('bg-dark');
        }); 
    }
}

ThemeSwitch.addEventListener('click', function(){
    changeText();
})

$('.Color-Text').each(function() {
    $(this).addClass('Color-Text-Dark');
});