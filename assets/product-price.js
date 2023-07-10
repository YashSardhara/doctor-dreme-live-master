class ProductPrice extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    (this.new_save = this.querySelector(".you_save .you_save_p")),
      (this.new_special_offer = this.querySelector(".special-price")),
      (this.new_compare_price = this.querySelector(".profit_compare_price")),
      (this.new_price = this.querySelector(".profile_price")),
      (this.compare_price = this.querySelector(".product-price--compare")),
      (this.price = this.querySelector(".product-price--original")),
      (this.reference_unit = this.querySelector(
        ".product-price--reference-unit"
      )),
      (this.reference_value = this.querySelector(
        ".product-price--reference-value"
      )),
      (this.root = this.closest(`[data-product-id='${this.dataset.id}']`)),
      (this.unit_price = this.querySelector(".product-price--unit-price")),
      (this.unit_price_container = this.querySelector(
        ".product-price--unit-container"
      )),
      this.updatePriceListener();
  }
  disconnectedCallback() {
    this.root.off("variantUpdated.productPrice");
  }
  updatePriceListener() {
    this.root.on("variantUpdated.productPrice", (e) => {
      this.updatePrices(e.detail);
    });
  }
  updatePrices(e) {
    if (e.compare_at_price > e.price) {
      var c_price = e.compare_at_price;
      var p_price = e.price;
      var diffrent_price = e.compare_at_price - e.price;
      var off_price = diffrent_price * 100;
      off_price = off_price / c_price;
      off_price = parseInt(off_price);
      off_price = off_price + "%";
      console.log(c_price, "new_price");
      console.log(diffrent_price, "diffrent_price");
      console.log(off_price, "off_price");
      $(".sale_banner_product").text("(" + off_price + ")");
      $(".offer_price").text(off_price + " OFF");
      this.new_special_offer.innerHTML = theme.utils.formatMoney(p_price);
      this.new_save.innerHTML = theme.utils.formatMoney(diffrent_price);
      // $(".special-price").text(theme.utils.formatMoney(p_price));
    }

    e
      ? ((this.style.display = "block"),
        (this.price.innerHTML = theme.utils.formatMoney(e.price * 1)),
        e.compare_at_price > e.price ? ((this.compare_price.innerHTML = 'MRP. ' + theme.utils.formatMoney( e.compare_at_price)),
            (this.compare_price.style.display = "inline-block"))
          : (this.compare_price.style.display = "none"),
        e.unit_price_measurement
          ? ((this.unit_price.innerHTML = theme.utils.formatMoney(
              e.unit_price
            )),
            (this.reference_unit.innerHTML =
              e.unit_price_measurement.reference_unit),
            1 === e.unit_price_measurement.reference_value &&
            this.reference_value
              ? (this.reference_value.style.display = "none")
              : this.reference_value &&
                ((this.reference_value.innerHTML =
                  e.unit_price_measurement.reference_value),
                (this.reference_value.style.display = "block")),
            (this.unit_price_container.style.display = "flex"))
          : (this.unit_price_container.style.display = "none"))
      : (this.style.display = "none");
  }
}

customElements.define("product-price-root", ProductPrice);
