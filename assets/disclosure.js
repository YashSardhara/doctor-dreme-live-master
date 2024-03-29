class Disclosure extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", () => this.load()) : this.load();
    }
    disconnectedCallback() {
        this.toggle.off("click.Disclosure keydown.Disclosure focusout.Disclosure"),
            this.form.off("focusout.Disclosure"),
            this.links.off("click.Disclosure keydown.Disclosure"),
            this.input.off("change.Disclosure"),
            this.off("keydown.Disclosure"),
            window.off("resize.Disclosure theme:offCanvas:leftOpened.Disclosure theme:offCanvas:rightOpened.Disclosure");
    }
    load() {
        (this.current_option = this.querySelector(".disclosure--current-option")),
            (this.form = this.querySelector(".disclosure--form")),
            (this.input = this.querySelector('[data-item="disclosure"]')),
            (this.links = this.querySelectorAll(".disclosure--option-link")),
            (this.toggle = this.querySelector(".disclosure--toggle")),
            (this.type = this.getAttribute("data-type")),
            (this.toggle_and_form_gap = 8),
            (this.window_and_form_gap = 32),
            (this.form_space_needed = theme.utils.getHiddenElHeight(this.form, !1) + this.toggle_and_form_gap + this.window_and_form_gap),
            this.updateFormListeners(),
            this.showFormWhenClick(),
            this.hideFormWhenFocusOut(),
            this.setOptionOnClick(),
            this.updateFormPosition(),
            ("url-redirect" !== this.type && "localization" !== this.type) || this.optionChangeCallback();
    }
    updateFormListeners() {
        window.on(
            "resize.Disclosure",
            theme.utils.debounce(100, () => this.updateFormPosition())
        ),
            window.on("theme:offCanvas:leftOpened.Disclosure", () => {
                this.closest(".off-canvas--left-sidebar") && this.updateFormPosition();
            }),
            window.on("theme:offCanvas:rightOpened.Disclosure", () => {
                this.closest(".off-canvas--right-sidebar") && this.updateFormPosition();
            });
    }
    showFormWhenClick() {
        this.toggle.on("click.Disclosure keydown.Disclosure", (t) => {
            ("keydown" === t.type && "Enter" !== t.key) || ((t = "true" === this.toggle.getAttribute("aria-expanded")), this.toggleFormDisplay(!t));
        });
    }
    hideFormWhenFocusOut() {
        this.toggle.on("focusout.Disclosure", (t) => {
            this.contains(t.relatedTarget) || this.toggleFormDisplay(!1);
        }),
            this.form.on("focusout.Disclosure", (t) => {
                (t = this.form.contains(t.relatedTarget)), "true" !== this.toggle.getAttribute("aria-expanded") || t || this.toggleFormDisplay(!1);
            }),
            this.on("keydown.Disclosure", (t) => {
                "Escape" === t.key && (this.toggleFormDisplay(!1), this.toggle.focus());
            });
    }
    setOptionOnClick() {
        this.links.on("click.Disclosure keydown.Disclosure", (t) => {
            if ((console.log(this, "========= one variant block[disclosure--root] ============"), "Enter" === t.key)) this.toggle.focus();
            else if ("keydown" === t.type) return;
            let e = t.target;
            var t = e.dataset.value,
                s = e.innerHTML;
            console.log(e, "========= Getting disclosure--option-link class div [li] ========="),
                console.log(t, "========= Getting  e selected div data-value value ========="),
                console.log(s, "========= Getting clicked option value ========="),
                this.toggleFormDisplay(!1),
                (this.current_option.innerHTML = s),
                this.links.forEach((t) => t.setAttribute("aria-current", !1)),
                console.log(t, "value of t in diclosure"),
                e.setAttribute("aria-current", !0),
                (this.input.value = t),
                this.input.trigger("change");
        });
    }
    
    toggleFormDisplay(t) {
        this.toggle.setAttribute("aria-expanded", t);
    }
    updateFormPosition() {
        var t = this.toggle.offsetHeight,
            e = t + this.toggle_and_form_gap,
            s = this.closest("[class^=off-canvas]"),
            s = s ? s.offsetHeight : 0,
            i = this.offset().top,
            s = s - i - t,
            t = this.form_space_needed > s && s < i,
            o = this.form_space_needed > i && i < s;
        let r = window.innerHeight - e - this.window_and_form_gap;
        t ? (r -= s) : o && (r -= i), (this.form.style.maxHeight = r + "px"), t ? ((s = theme.utils.getHiddenElHeight(this.form, !1) + this.toggle_and_form_gap), (this.form.style.top = `-${s}px`)) : (this.form.style.top = e + "px");
    }
    optionChangeCallback() {
        this.input.on("change.Disclosure", (t) => {
            let e = t.target;
            "url-redirect" === this.type ? (window.location.href = e.value) : "localization" === this.type && e.closest("form").submit();
        });
    }
}
customElements.define("disclosure-root", Disclosure);