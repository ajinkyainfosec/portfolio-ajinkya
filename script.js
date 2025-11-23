/* script.js */
document.getElementById('date').innerText = new Date().toLocaleDateString();

document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-target');
        const el = document.getElementById(id);
        if (!el) return;
        try {
            await navigator.clipboard.writeText(el.innerText);
            btn.innerText = 'Copied ✓';
            setTimeout(() => btn.innerText = 'Copy', 1400);
        } catch (e) {
            btn.innerText = 'Copy (failed)';
            setTimeout(() => btn.innerText = 'Copy', 1400);
        }
    });
});