import './app.css'
import App from './App.svelte';

const targetElement = document.getElementById('app')!;
const app = new App({
  target: targetElement,
});

export default app;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = (this as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const targetOffset = targetElement.offsetTop - 80;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const header = document.getElementById('header');
    const headerContainer = document.querySelector('.header__container') as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        headerContainer.style.padding = '0';
        if (header) {
            header.style.backgroundColor = 'rgba(53,54,55,0.55)';
        }
    } else {
        headerContainer.style.padding = '25px 0';
        if (header) {
            header.style.backgroundColor = 'transparent';
        }
    }

    const newPos1 = -7 - scrolled * 0.1;
    const decor1 = document.querySelector('.decor1') as HTMLElement;
    if (decor1) {
        decor1.style.top = newPos1 + '%';
    }

    const newPos2 = -8 - scrolled * 0.1;
    const decor2 = document.querySelector('.decor2') as HTMLElement;
    if (decor2) {
        decor2.style.left = newPos2 + '%';
    }

    const newPos4 = -5 + scrolled * 0.1;
    const decor4 = document.querySelector('.decor4') as HTMLElement;
    if (decor4) {
        decor4.style.right = -5 - newPos4 + '%';
    }

    const newPos5 = -30 - scrolled * 0.1;
    const decor5 = document.querySelector('.decor5') as HTMLElement;
    if (decor5) {
        decor5.style.top = newPos5 + '%';
    }
});

let api = 'https://v6.exchangerate-api.com/v6/664b1622bf498758d161ff89/latest/USD';
const fromConvert = document.getElementById("fromConvert") as HTMLInputElement;
const toConvert = document.getElementById("toConvert") as HTMLInputElement;

async function getExchangeRate(from: string, to: string): Promise<number> {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/664b1622bf498758d161ff89/latest/${from}`);
    const data = await response.json();
    return data.conversion_rates[to];
}

async function updateConvertedValueFrom() {
    const fromCurrency = fromConvert.value;
    const toCurrency = toConvert.value;
    const convert1 = document.getElementById("convert1") as HTMLInputElement;
    const convert2 = document.getElementById("convert2") as HTMLInputElement;

    const rate = await getExchangeRate(fromCurrency, toCurrency);

    if (!isNaN(parseFloat(convert1.value))) {
        const convertedValue = parseFloat(convert1.value) * rate;
        convert2.value = convertedValue.toFixed(2);
    }
}

async function updateConvertedValueTo() {
    const fromCurrency = fromConvert.value;
    const toCurrency = toConvert.value;
    const convert1 = document.getElementById("convert1") as HTMLInputElement;
    const convert2 = document.getElementById("convert2") as HTMLInputElement;

    const rate = await getExchangeRate(toCurrency, fromCurrency);

    if (!isNaN(parseFloat(convert2.value))) {
        const convertedValue = parseFloat(convert2.value) * rate;
        convert1.value = convertedValue.toFixed(2);
    }
}

document.getElementById("convert1")?.addEventListener("input", updateConvertedValueFrom);
document.getElementById("convert2")?.addEventListener("input", updateConvertedValueTo);
document.getElementById("fromConvert")?.addEventListener("change", updateConvertedValueFrom);
document.getElementById("toConvert")?.addEventListener("change", updateConvertedValueTo);


