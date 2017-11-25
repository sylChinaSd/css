$(document).ready(function() {
    //由于有图片。所以应该在所有图片下载完成之后再启动图片墙布局
    //推荐使用js插件imagesLoaded，可通过imagesloaded.desandro.com.下载
    var $masonryGrid = $('.grid');
    $masonryGrid.masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        //below stamp
        stamp: ".stamp",
        percentPosition: true
    });
    $masonryGrid.imagesLoaded().progress(function() {
        $masonryGrid.masonry('layout');
    });
});