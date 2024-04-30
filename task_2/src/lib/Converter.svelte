<script>
    import arrow from '../assets/arrow.svg';
</script>

<style>
    .task2__convert {
        display: flex;
        list-style: none;
        column-gap: 100px;
    }
    .task2__item {
        border-radius: 25px;
        width: 45%;
        height: 330px;
        background: rgba(53, 54, 55, 0.65);
    }
    .task2__top {
        position: relative;
        display: flex;
        height: 80px;
        border-bottom: 2px solid #8AAEFF;
        padding: 20px;
    }
    .task2__top img {
        position: absolute;
        right: 4%;
        top: 7%;
    }
    select {
        position: relative;
        z-index: 10;
        font-size: 26px;
        padding: 25px 40px;
        width: 100%;
        color: #fff;
        background: none;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline:none;
    }
    select::-ms-expand {
        display: none;
    }
    .task2__item input {
        color: #fff;
        font-weight: 600;
        font-size: 52px;
        width: 99%;
        height: 200px;
        background: none;
        border: none;
        outline:none;
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    option {
        background: rgba(53, 54, 55, 0.65);
        color: #fff;
    }
</style>

<ul class="task2__convert">
    <li class="task2__item">
        <div class="task2__top">
            <select name="" id="fromConvert">
                <option value="USD">USD - Доллар США</option>
                <option value="RUB">RUB - Российский рубль</option>
                <option value="CAD">CAD - Австралийский доллар</option>
                <option value="USD">CHF - Швейцарский франк</option>
                <option value="JPY">JPY - Японская йена</option>
                <option value="NZD">NZD - Новозеландский доллар</option>
                <option value="EUR">EUR - Евро</option>
                <option value="GBP">GBP - Британский фунт</option>
                <option value="SEK">SEK - Шведская крона</option>
                <option value="DKK">DKK - Датская крона</option>
                <option value="NOK">NOK - Норвежская крона</option>
                <option value="SGD">SGD - Сингапурский доллар</option>
                <option value="CZK">CZK - Чешская крона</option>
                <option value="HKD">HKD - Гонконгский доллар</option>
                <option value="MXN">MXN - Мексиканский песо</option>
                <option value="PLN">PLN - Польский злотый</option>
                <option value="TRY">TRY - Турецкая лира</option>
                <option value="ZAR">ZAR - Ранд ЮАР</option>
                <option value="CNH">CNH - Китайский юань</option>
            </select>
            <img src="{arrow}" width="100px" height="100px" alt="">
        </div>
        <input id="convert1" type="number" name="">
    </li>
    <li class="task2__item">
        <div class="task2__top">
            <select name="" id="toConvert">
                <option value="USD">USD - Доллар США</option>
                <option value="RUB">RUB - Российский рубль</option>
                <option value="CAD">CAD - Австралийский доллар</option>
                <option value="USD">CHF - Швейцарский франк</option>
                <option value="JPY">JPY - Японская йена</option>
                <option value="NZD">NZD - Новозеландский доллар</option>
                <option value="EUR">EUR - Евро</option>
                <option value="GBP">GBP - Британский фунт</option>
                <option value="SEK">SEK - Шведская крона</option>
                <option value="DKK">DKK - Датская крона</option>
                <option value="NOK">NOK - Норвежская крона</option>
                <option value="SGD">SGD - Сингапурский доллар</option>
                <option value="CZK">CZK - Чешская крона</option>
                <option value="HKD">HKD - Гонконгский доллар</option>
                <option value="MXN">MXN - Мексиканский песо</option>
                <option value="PLN">PLN - Польский злотый</option>
                <option value="TRY">TRY - Турецкая лира</option>
                <option value="ZAR">ZAR - Ранд ЮАР</option>
                <option value="CNH">CNH - Китайский юань</option>
            </select>
            <img src="{arrow}" width="100px" height="100px" alt="">
        </div>
        <input id="convert2" type="number" name="">
    </li>
</ul>

<div class="task2__graph"></div>