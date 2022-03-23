
// CONFIGURACIONES DEL ADMIN
// Modo oscuro
$('#cbox-dark-mode').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('dark-mode')
        addClassDarkHeaderMain()
    } else {
        $('body').removeClass('dark-mode')
       removeClassDarkHeaderMain()
    }
})

function addClassDarkHeaderMain(){
    removeClassLightHeaderMain()
    $('.main-header').addClass('navbar-dark')
}

function removeClassDarkHeaderMain(){
    $('.main-header').removeClass('navbar-dark')
    addClassLightHeaderMain()
}

function removeClassLightHeaderMain(){
    $('.main-header').removeClass('navbar-white').removeClass('navbar-light')
}

function addClassLightHeaderMain(){
    $('.main-header').addClass('navbar-light')//.addClass('navbar-white')
}


// OPCIONES DE LA CABECERA
$('#cbox-fixed-header').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('layout-navbar-fixed')
    } else {
        $('body').removeClass('layout-navbar-fixed')
    }
})

$('#cbox-dropdown-header').click(function (){
    if ($(this).is(':checked')) {
        $('.main-header').addClass('dropdown-legacy')
    } else {
        $('.main-header').removeClass('dropdown-legacy')
    }
})

$('#cbox-border-header').click(function (){
    if ($(this).is(':checked')) {
        $('.main-header').addClass('border-bottom-0')
    } else {
        $('.main-header').removeClass('border-bottom-0')
    }
})

// OPCIONES DE LA BARRA LATERAL
$('#cbox-collapse-sidebar').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('sidebar-collapse')
        $(window).trigger('resize')
    } else {
    $('body').removeClass('sidebar-collapse')
        $(window).trigger('resize')
    }
})

$('#cbox-fixed-sidebar').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('layout-fixed')
        $(window).trigger('resize')
    } else {
        $('body').removeClass('layout-fixed')
        $(window).trigger('resize')
    }
})

$('#cbox-sidebar-mini').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('sidebar-mini')
    } else {
        $('body').removeClass('sidebar-mini')
    }
})

$('#cbox-sidebar-mini-md').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('sidebar-mini-md')
    } else {
        $('body').removeClass('sidebar-mini-md')
    }
})

$('#cbox-sidebar-mini-xs').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('sidebar-mini-xs')
    } else {
        $('body').removeClass('sidebar-mini-xs')
    }
})

$('#cbox-sidebar-flat-style').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('nav-flat')
    } else {
        $('.nav-sidebar').removeClass('nav-flat')
    }
})

$('#cbox-sidebar-legacy-style').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('nav-legacy')
    } else {
        $('.nav-sidebar').removeClass('nav-legacy')
    }
})

$('#cbox-sidebar-compact').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('nav-compact')
    } else {
        $('.nav-sidebar').removeClass('nav-compact')
    }
})

$('#cbox-nav-child-ident').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('nav-child-indent')
    } else {
        $('.nav-sidebar').removeClass('nav-child-indent')
    }
})

$('#cbox-sidebar-child-hide').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('nav-collapse-hide-child')
    } else {
        $('.nav-sidebar').removeClass('nav-collapse-hide-child')
    }
})

$('#cbox-sidebar-disable-focus').click(function (){
    if ($(this).is(':checked')) {
        $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
        $('.main-sidebar').removeClass('sidebar-no-expand')
    }
})

// OPCIONES DEL PIE DE PAGINA
$('#cbox-footer-fixed').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('layout-footer-fixed')
    } else {
        $('body').removeClass('layout-footer-fixed')
    }
})


// OPCIONES DE TEXTO PEQUEÑO
$('#cbox-small-text-body').click(function (){
    if ($(this).is(':checked')) {
        $('body').addClass('text-sm')
    } else {
        $('body').removeClass('text-sm')
    }
})

$('#cbox-small-text-content-wrapper').click(function (){
    if ($(this).is(':checked')) {
        $('.content-wrapper').addClass('text-sm')
    } else {
        $('.content-wrapper').removeClass('text-sm')
    }
})

$('#cbox-small-text-navbar').click(function (){
    if ($(this).is(':checked')) {
        $('.main-header').addClass('text-sm')
    } else {
        $('.main-header').removeClass('text-sm')
    }
})

$('#cbox-small-text-brand').click(function (){
    if ($(this).is(':checked')) {
        $('.brand-link').addClass('text-sm')
    } else {
        $('.brand-link').removeClass('text-sm')
    }
})

$('#cbox-small-text-sidebar').click(function (){
    if ($(this).is(':checked')) {
        $('.nav-sidebar').addClass('text-sm')
    } else {
        $('.nav-sidebar').removeClass('text-sm')
    }
})

$('#cbox-small-text-sidebar-right').click(function (){
    if ($(this).is(':checked')) {
        $('.control-sidebar-content').addClass('text-sm')
    } else {
        $('.control-sidebar-content').removeClass('text-sm')
    }
})

$('#cbox-small-text-footer').click(function (){
    if ($(this).is(':checked')) {
        $('.main-footer').addClass('text-sm')
    } else {
        $('.main-footer').removeClass('text-sm')
    }
})

// OPCIONES DE COLORES
var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray'
]

var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange'
]

var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
]

var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
'accent-olive'
]

var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
]

var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
var active_navbar_color = null

// VARIANTES DE LA BARRA DE NAVEGACIÓN
$('#select-navbar-variants').change(function (){
    let color = ($(this).val())
    active_navbar_color = color.replace('navbar-', 'bg-')

    if(color != ''){
        deleteNavbarSkins()
        $(this).removeClass().addClass('custom-select mb-3 border-1')
    
        if ($('body').hasClass('dark-mode')) {
            $(this).addClass('text-light')
            $('.main-header').addClass('navbar-dark')
        } else {
            $(this).addClass('text-black')
            $('.main-header').addClass('navbar-light')
        }
    
        $('.main-header').addClass(color)
        $(this).addClass(active_navbar_color)
    }    
})

function deleteNavbarSkins(){
    for (let i = 0; i < navbar_all_colors.length; i++){
        if($('.main-header').hasClass(navbar_all_colors[i])){
            $('.main-header').removeClass(navbar_all_colors[i])
        }
    }
}

function applyVariantColorNavbar(elem){
    if ($('body').hasClass('dark-mode')) {
        $(this).addClass('text-light')
        $('.main-header').addClass('navbar-dark')
    } else {
        $(this).addClass('text-black')
        $('.main-header').addClass('navbar-light')
    }
}

// Variantes del color de acento
