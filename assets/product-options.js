class ProductOptions extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log(this, "==== connectedCallback() - this[product-options--root] ===="),
            (this.first_variant_available = "true" === this.dataset.firstVariantAvailable),
            (this.is_product_page = null !== this.closest(".product-page--root")),
            (this.labels = this.querySelectorAll(".disclosure--root, .radios--header")),
            (this.options_container = this.querySelector(".product-options--container")),
            (this.option_inputs = this.options_container.querySelectorAll('[data-item="disclosure"], [data-item="radio"]')),
            (this.root = this.closest(`[data-product-id='${this.dataset.id}']`)),
            (this.size_chart = this.querySelector(".product-options--option .product-size-chart--root")),
            (this.variants = JSON.parse(this.querySelector(".product-options--json").value)),
            this.getAvailableVariants(),
            this.disableEmptyOptions(),
            this.optionChangeListener(),
            this.updateDisabledOptions(this.first_variant_available),
            this.size_chart && this.moveSizeChart();
    }
    disconnectedCallback() {
        this.option_inputs.off("change.ProductOptions");
    }
    getAvailableVariants() {
        console.log(this, "==== getAvailableVariants() - this [variant main div ] ===="),
            (this.available_variants = []),
            this.variants.forEach((t) => {
                console.log(t, "==== getAvailableVariants() - t [all avilable varaint ]===="), t.available && this.available_variants.push(t.options);
            });
    }
    disableEmptyOptions() {
        let t = this.available_variants.flat(),
            a = this.options_container.querySelectorAll(".radios--input, .disclosure--option-link");
        console.log(a, "==== disableEmptyOptions() - t[all variant list] ===="),
            a.length &&
                a.forEach((a) => {
                    var i = this.getOptionValue(a);
                    console.log(i, "==== disableEmptyOptions() - a ===="), t.includes(i) || a.setAttribute("data-empty", !0), console.log(t, "==== disableEmptyOptions() - a[all avilable variaint without line throught on load ] ====");
                });
    }
    getOptionValue(t) {
        return t.getAttribute("data-value") ? t.getAttribute("data-value") : t.value;
    }
    optionChangeListener() {
        this.option_inputs.on("change.ProductOptions", (t) => {
            let a = [],
                i = this.options_container.querySelectorAll('[data-item="disclosure"], [data-item="radio"]:checked');
            i.forEach((t) => {
                var i = t.closest(".product-options--option").dataset.index;
                a.push({ index: i, value: t.value });
            });
            let e = !1;
            this.variants.every((t) => {
                let i = !0;
                return (
                    a.forEach((a) => {
                        i = i && t.options[a.index] === a.value;
                    }),
                    !i || ((e = t), !1)
                );
            }),
                this.updateVariant(e, t.target);
        });
    }
    updateVariant(t, a) {
        this.updateDisabledOptions(t.available, a), this.is_product_page && this.updateHistoryState(t.id), this.root.trigger("variantUpdated", t);
    }
    updateHistoryState(t) {
        let a = "" + location.origin + location.pathname;
        t && (a += "?variant=" + t), history.replaceState({ path: a }, "", a);
    }
    updateDisabledOptions(t, a = !1) {
        console.log(t, "==== if variant avilable than true or undefine [updateDisabledOptions method call] ====");
        let i = this.options_container.querySelectorAll(".radios--input, .disclosure--option-link");
        if ((console.log(i, "==== Get all option with [disclosure--option-link] class name ===="), i.length)) {
            let e = [];
            i.forEach((t) => {
                console.log("==== Remove data-unavilable from all option ===="), (t.checked || "true" === t.getAttribute("aria-current")) && e.push(t);
            }),
                console.log(e, "==== Selected value from all variant dropdown ===="),
                this.options_container.querySelectorAll(".disclosure--current-option");
            let o;
            console.log(a, "==== Current value of E ===="),
                !1 === a ? ((a = e[0]), (o = this.getOptionValue(a))) : a.classList.contains("disclosure--input") ? ((o = a.value), (a = e.find((t) => t.getAttribute("data-value") === o))) : (o = a.value),
                console.log(o, "==== updateDisabledOptions() - a[selected value] ===="),
                console.log(e, "==== updateDisabledOptions() - s[all 3 variant value ] ====");
            let l = [],
                s = a.closest(".radios--container, .disclosure--form"),
                r = s.querySelectorAll(".radios--input, .disclosure--option-link"),
                n =
                    (r.forEach((t) => {
                        (t = this.getOptionValue(t)),
                            console.log(t, " ==== updateDisabledOptions - t[currently clicked variant dropdown ul li loop and get  value of li ] ===="),
                            console.log(o, "==== updateDisabledOptions - a [currently clicked variant dropdown ] ===="),
                            console.log(t !== o, "==== updateDisabledOptions === t !== a [check not equal] ===="),
                            t !== o && l.push(t);
                    }),
                    l);
            console.log(l, "====updateDisabledOptions - r array[ not comman variant value added to this array] ===="),
                console.log(s, "==== updateDisabledOptions - n [currently clicked variant dropdown ul ]===="),
                console.log(r, "==== updateDisabledOptions - l [currently clicked variant dropdown ul li ]===="),
                console.log(this.available_variants, "===== this.available_variants ===="),
                this.available_variants.forEach((t) => {
                    console.log(n, " updateDisabledOptions() ==== u "), t.includes(o) && t.forEach((t) => n.push(t));
                });
        }
    }
    moveSizeChart() {
        let t = this.size_chart.parentNode.querySelector("label").parentNode;
        t.appendChild(this.size_chart);
    }
}
customElements.define("product-options-root", ProductOptions);