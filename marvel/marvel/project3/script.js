let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let offset = 0;
let formColor = "#1a1a1a";

function initials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function lighten(hex) {
    const map = {
        "#1a1a1a": "#d1d5db", "#8b5cf6": "#ede9fe",
        "#f97316": "#fed7aa", "#10b981": "#a7f3d0",
        "#e11d48": "#fecdd3", "#0ea5e9": "#bae6fd",
        "#d97706": "#fde68a", "#6366f1": "#e0e7ff",
    };
    return map[hex] || "#e5e7eb";
}

function renderCards() {
    const stack = document.getElementById('cardStack');
    const counter = document.getElementById('counter');
    stack.innerHTML = '';

    if (contacts.length === 0) {
        stack.innerHTML = '<div class="empty-msg">No contacts yet.<br>Click + to add one.</div>';
        counter.textContent = '';
        return;
    }

    const visible = Math.min(3, contacts.length);
    for (let i = 0; i < visible; i++) {
        const idx = (offset + i) % contacts.length;
        const c = contacts[idx];
        const card = document.createElement('div');
        card.className = 'card c' + i;

        if (i === 0) {
            card.style.background = c.color;
            card.style.borderColor = 'transparent';
            card.style.color = '#fff';
        }

        const avatarBg = i === 0 ? 'rgba(255,255,255,0.25)' : lighten(c.color);
        const avatarClr = i === 0 ? '#fff' : c.color;
        const labelClr = i === 0 ? 'rgba(255,255,255,0.65)' : '#888';
        const callBg = i === 0 ? 'rgba(255,255,255,0.92)' : '#1a1a1a';
        const callClr = i === 0 ? c.color : '#fff';
        const msgBdr = i === 0 ? 'rgba(255,255,255,0.45)' : '#ccc';
        const msgClr = i === 0 ? '#fff' : '#1a1a1a';

        const avatarHtml = c.photo
            ? `<div class="avatar"><img src="${c.photo}" alt="${c.name}"/></div>`
            : `<div class="avatar" style="background:${avatarBg};color:${avatarClr};">${initials(c.name)}</div>`;

        card.innerHTML = `
        ${avatarHtml}
        <div class="card-name">${c.name}</div>
        <div class="card-row">
          <span class="label" style="color:${labelClr}">Home town</span>
          <span>${c.town}</span>
        </div>
        <div class="card-row">
          <span class="label" style="color:${labelClr}">Bookings</span>
          <span>${c.bookings}</span>
        </div>
        <div class="card-btns">
          <button class="btn-call" style="background:${callBg};color:${callClr};">
            <i class="ti ti-phone" style="font-size:14px"></i> Call
          </button>
          <button class="btn-msg" style="color:${msgClr};border-color:${msgBdr};">
            Message
          </button>
        </div>`;
        stack.appendChild(card);
    }

    counter.textContent = `${(offset % contacts.length) + 1} of ${contacts.length}`;
}

function showForm(show) {
    document.getElementById('formWrap').style.display = show ? 'block' : 'none';
    document.getElementById('scene').style.display = show ? 'none' : 'flex';
}

document.getElementById('colorDots').addEventListener('click', e => {
    const dot = e.target.closest('.dot');
    if (!dot) return;
    document.querySelectorAll('#colorDots .dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
});

document.getElementById('formColors').addEventListener('click', e => {
    const dot = e.target.closest('.form-dot');
    if (!dot) return;
    document.querySelectorAll('.form-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    formColor = dot.dataset.color;
});

document.getElementById('upBtn').addEventListener('click', () => {
    if (!contacts.length) return;
    offset = (offset - 1 + contacts.length) % contacts.length;
    renderCards();
});

document.getElementById('downBtn').addEventListener('click', () => {
    if (!contacts.length) return;
    offset = (offset + 1) % contacts.length;
    renderCards();
});

document.getElementById('addBtn').addEventListener('click', () => showForm(true));
document.getElementById('cancelBtn').addEventListener('click', () => showForm(false));

document.getElementById('saveBtn').addEventListener('click', () => {
    const name = document.getElementById('fName').value.trim();
    if (!name) { document.getElementById('fName').focus(); return; }

    contacts.unshift({
        name,
        town: document.getElementById('fTown').value.trim() || '—',
        bookings: document.getElementById('fBookings').value.trim() || '0 times',
        photo: document.getElementById('fPhoto').value.trim(),
        color: formColor,
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    offset = 0;
    ['fName', 'fTown', 'fBookings', 'fPhoto'].forEach(id => document.getElementById(id).value = '');
    formColor = '#1a1a1a';
    document.querySelectorAll('.form-dot').forEach((d, i) => d.classList.toggle('active', i === 0));

    showForm(false);
    renderCards();
});

renderCards();
