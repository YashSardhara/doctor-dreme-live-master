class RecentProducts extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.current_width = window.innerWidth, this.main_grid = this.querySelector(".recent-products--grid"), this.num_errors = 0, this.num_loaded = 0, this.spinner = this.querySelector(".recent-products--spinner"), this.storage = JSON.parse(localStorage.getItem(theme.local_storage.recent_products)), this.storage ? this.storage.forEach(e => this.renderProductItem(e)) : this.style.display = "none"
	}
	async renderProductItem(e) {
		const t = await fetch(theme.urls.root + `/products/${e}?view=ajax-item`);
		t.ok ? (e = await t.text(), e = theme.utils.parseHtml(e, ".product--root"), this.main_grid.prepend(e), this.checkIfAllProductsLoaded()) : (this.num_errors++, this.num_errors === this.storage.length ? this.style.display = "none" : this.checkIfAllProductsLoaded())
	}
	checkIfAllProductsLoaded() {
		this.num_loaded++, this.num_loaded === this.storage.length && (this.main_grid.removeAttribute("style"), this.spinner.style.display = "none", this.formatProducts())
        if(this.num_loaded === this.storage.length){
   $(".recent-products--grid").slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     adaptiveHeight: true,
     infinite: true,
     arrows: true,
     responsive: [
		{
			breakpoint: 1200,
			settings: {
			  arrows: false,
			  slidesToShow: 2
			}
		  },
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           slidesToShow: 1.1
         }
       }
     ]
   });
        }
	}
	formatProducts() {
		this.resizeListeners(), this.matchImageHeights(), theme.settings.hover_image_enabled && this.hoverImagesLoaded(), theme.settings.quick_add && theme.off_canvas && theme.off_canvas.reset()
	}
	resizeListeners() {
		window.on("resize.RecentProducts", theme.utils.debounce(100, () => {
			this.current_width !== window.innerWidth && (this.matchImageHeights(), this.current_width = window.innerWidth)
		}))
	}
	matchImageHeights() {
		theme.utils.matchImageHeights(this.main_grid, this.querySelectorAll(".product--root"), ".product--image-wrapper")
	}
	hoverImagesLoaded() {
		this.main_grid.querySelectorAll(".product--hover-image").forEach(t => {
			theme.utils.imagesLoaded(t, () => {
				const e = t.closest('[data-hover-image="true"]');
				e && e.setAttribute("data-hover-image", "loaded")
			})
		})
	}
}
customElements.define("recent-products-root", RecentProducts);