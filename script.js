const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');

function calculate()
{
    g.innerHTML = a.value * c.value + b.value * d.value;
    h.innerHTML = a.value * e.value + b.value * f.value;
};

calculate();

a.addEventListener("input", () => 
{
    calculate();
});

b.addEventListener("input", () => 
{
    calculate();
});

c.addEventListener("input", () => 
{
    calculate();
});

d.addEventListener("input", () => 
{
    calculate();
});

e.addEventListener("input", () => 
{
    calculate();
});

f.addEventListener("input", () => 
{
    calculate();
});
