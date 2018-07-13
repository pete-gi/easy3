import '@fancyapps/fancybox/dist/jquery.fancybox.min';
class Fancybox {
    constructor(selector) {
        this.selector = selector;
        this.thumbnails = false;
    }

    init() {
        $(this.selector).fancybox({
            // Enable infinite gallery navigation
            loop: false,

            // Space around image, ignored if zoomed-in or viewport width is smaller than 800px
            margin: [44, 0],

            // Horizontal space between slides
            gutter: 50,

            // Enable keyboard navigation
            keyboard: true,

            // Should display navigation arrows at the screen edges
            arrows: true,

            // Should display infobar (counter and arrows at the top)
            infobar: true,

            // Should display toolbar (buttons at the top)
            toolbar: true,

            // What buttons should appear in the top right corner.
            // Buttons will be created using templates from `btnTpl` option
            // and they will be placed into toolbar (class="fancybox-toolbar"` element)
            buttons: [
                'slideShow',
                'fullScreen',
                'thumbs',
                'share',
                //'download',
                //'zoom',
                'close'
            ],

            // Detect "idle" time in seconds
            idleTime: 3,

            // Should display buttons at top right corner of the content
            // If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
            // Use template from `btnTpl.smallBtn` for customization
            smallBtn: 'auto',

            // Disable right-click and use simple image protection for images
            protect: false,

            // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
            modal: false,

            image: {

                // Wait for images to load before displaying
                // Requires predefined image dimensions
                // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
                preload: "auto"

            },

            ajax: {

                // Object containing settings for ajax request
                settings: {

                    // This helps to indicate that request comes from the modal
                    // Feel free to change naming
                    data: {
                        fancybox: true
                    }
                }

            },

            iframe: {

                // Iframe template
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

                // Preload iframe before displaying it
                // This allows to calculate iframe content width and height
                // (note: Due to "Same Origin Policy", you can't get cross domain data).
                preload: true,

                // Custom CSS styling for iframe wrapping element
                // You can use this to set custom iframe dimensions
                css: {},

                // Iframe tag attributes
                attr: {
                    scrolling: 'auto'
                }

            },

            // Default content type if cannot be detected automatically
            defaultType: 'image',

            // Open/close animation type
            // Possible values:
            //   false            - disable
            //   "zoom"           - zoom images from/to thumbnail
            //   "fade"
            //   "zoom-in-out"
            //
            animationEffect: "zoom",

            // Duration in ms for open/close animation
            animationDuration: 500,

            // Should image change opacity while zooming
            // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
            zoomOpacity: "auto",

            // Transition effect between slides
            //
            // Possible values:
            //   false            - disable
            //   "fade'
            //   "slide'
            //   "circular'
            //   "tube'
            //   "zoom-in-out'
            //   "rotate'
            //
            transitionEffect: 'fade',

            // Duration in ms for transition animation
            transitionDuration: 366,

            // Custom CSS class for slide element
            slideClass: '',

            // Custom CSS class for layout
            baseClass: '',

            // Base template for layout
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-inner">' +
                '<div class="fancybox-infobar">' +
                '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
                '</div>' +
                '<div class="fancybox-toolbar">{{buttons}}</div>' +
                '<div class="fancybox-navigation">{{arrows}}</div>' +
                '<div class="fancybox-stage"></div>' +
                '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
                '</div>' +
                '</div>',

            // Loading indicator template
            spinnerTpl: '<div class="fancybox-loading"></div>',

            // Error message template
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

            btnTpl: {

                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">' +
                    '<svg viewBox="0 0 40 40">' +
                    '<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />' +
                    '</svg>' +
                    '</a>',

                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
                    '<svg viewBox="0 0 40 40">' +
                    '<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />' +
                    '</svg>' +
                    '</button>',

                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                    '<svg viewBox="0 0 40 40">' +
                    '<path d="M10,10 L30,30 M30,10 L10,30" />' +
                    '</svg>' +
                    '</button>',

                // This small close button will be appended to your html/inline/ajax content by default,
                // if "smallBtn" option is not set to false
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',

                // Arrows
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                    '<svg viewBox="0 0 40 40">' +
                    '<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>' +
                    '</svg>' +
                    '</button>',

                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                    '<svg viewBox="0 0 40 40">' +
                    '<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>' +
                    '</svg>' +
                    '</button>'
            },

            // Container is injected into this element
            parentEl: 'body',


            // Focus handling
            // ==============

            // Try to focus on the first focusable element after opening
            autoFocus: false,

            // Put focus back to active element after closing
            backFocus: true,

            // Do not let user to focus on element outside modal content
            trapFocus: true,


            // Module specific options
            // =======================

            fullScreen: {
                autoStart: false,
            },

            // Set `touch: false` to disable dragging/swiping
            touch: {
                vertical: true, // Allow to drag content vertically
                momentum: true // Continue movement after releasing mouse/touch when panning
            },

            // Hash value when initializing manually,
            // set `false` to disable hash change
            hash: null,

            // Customize or add new media types
            // Example:
            /*
            media : {
                youtube : {
                    params : {
                        autoplay : 0
                    }
                }
            }
            */
            media: {},

            slideShow: {
                autoStart: false,
                speed: 4000
            },

            thumbs: {
                autoStart: this.thumbnails, // Display thumbnails on opening
                hideOnClose: true, // Hide thumbnail grid when closing animation starts
                parentEl: '.fancybox-container', // Container is injected into this element
                axis: 'y' // Vertical (y) or horizontal (x) scrolling
            },

            // Use mousewheel to navigate gallery
            // If 'auto' - enabled for images only
            wheel: 'auto',

            // Callbacks
            //==========

            // See Documentation/API/Events for more information
            // Example:
            /*
                afterShow: function( instance, current ) {
                     console.info( 'Clicked element:' );
                     console.info( current.opts.$orig );
                }
            */

            onInit: $.noop, // When instance has been initialized

            beforeLoad: $.noop, // Before the content of a slide is being loaded
            afterLoad: $.noop, // When the content of a slide is done loading

            beforeShow: $.noop, // Before open animation starts
            afterShow: $.noop, // When content is done loading and animating

            beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
            afterClose: $.noop, // After instance has been closed

            onActivate: $.noop, // When instance is brought to front
            onDeactivate: $.noop, // When other instance has been activated


            // Interaction
            // ===========

            // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
            // each option can be string or method that returns value.
            //
            // Possible values:
            //   "close"           - close instance
            //   "next"            - move to next gallery item
            //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
            //   "toggleControls"  - show/hide controls
            //   "zoom"            - zoom image (if loaded)
            //   false             - do nothing

            // Clicked on the content
            clickContent: function (current, event) {
                return current.type === 'image' ? 'zoom' : false;
            },

            // Clicked on the slide
            clickSlide: 'close',

            // Clicked on the background (backdrop) element
            clickOutside: 'close',

            // Same as previous two, but for double click
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false,


            // Custom options when mobile device is detected
            // =============================================

            mobile: {
                idleTime: false,
                margin: 0,

                clickContent: function (current, event) {
                    return current.type === 'image' ? 'toggleControls' : false;
                },
                clickSlide: function (current, event) {
                    return current.type === 'image' ? 'toggleControls' : 'close';
                },
                dblclickContent: function (current, event) {
                    return current.type === 'image' ? 'zoom' : false;
                },
                dblclickSlide: function (current, event) {
                    return current.type === 'image' ? 'zoom' : false;
                }
            }
        });
    }
}

export default Fancybox;