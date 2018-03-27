! function($) {

    function buildWidget(rate, changed) {
        var color = "#00db43";
        changed < 0 && (color = "#ff1f46");
        var valPrice = rate ? c(rate, "USD") : "?",
            valPercentHTML = changed ? '<span style="color:' + color + '">(' + changed + "%)</span>" : "";

        return valPrice + " USD " + valPercentHTML
    }

    function c(a, b) {
        return "XRP" == b ? d(a) : e(a)
    }

    function d(a) {
        return a = a >= 1e3 ? Math.round(a).toLocaleString() : a >= 1 ? a.toFixed(8) : a < 1e-8 ? a.toPrecision(4) : a.toFixed(8)
    }

    function e(a) {
        return a = a >= 1 ? a >= 1e5 ? Math.round(a).toLocaleString() : a.toFixed(2) : a < 1e-6 ? a.toPrecision(2) : a.toFixed(6)
    }

    $(document).ready(function(a) {
        a.get({
            url: "https://api.coinmarketcap.com/v1/ticker/ripple/?ref=widget&convert=USD",
            success: function(m) {
                var price = parseFloat(m[0].price_usd),
                    percent_change = Number(m[0].percent_change_24h).toFixed(2);
                a('#target').html(buildWidget(price, percent_change))
            }
        })
    })
}(jQuery);