async function ingest() {
    const urls = document.getElementById('urls').value.split(',').map(u => u.trim());
    const res = await fetch('/ingest', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ urls })
    });
    const data = await res.json();
    document.getElementById('result').innerText = JSON.stringify(data);
}

async function ask() {
    const question = document.getElementById('question').value;
    const res = await fetch('/ask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ question })
    });
    const data = await res.json();
    document.getElementById('result').innerText = JSON.stringify(data);
}
