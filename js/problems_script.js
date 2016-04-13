$(document).ready(function(){
    $('.link_block_normal').mouseenter(function(){
        $(this).addClass('link_block_hover');
    });
    $('.link_block_normal').mouseleave(function(){
        $(this).removeClass('link_block_hover');
    });
});
