$(document).ready(function(){$('.gallery').mauGallery({columns:{xs:1,sm:2,md:3,lg:3,xl:3},lightBox:!0,lightboxId:'myAwesomeLightbox',showTags:!0,tagsPosition:'top'})})
const PurgeCSS=require('purgecss')
const purgeCSSResults=new PurgeCSS().purge({content:['**/*.html'],css:['assets/css/bootstrap.min.css','assets/css/style.css']})