(document.getElementById('listusersbutton') as HTMLButtonElement).addEventListener('click', function(e){
    let html = '';
    fetch('/list').then(res => res.json()).then(data => {
        console.log(data);
        for(let rec of data){
            for(let key in rec){
                html += `<li><strong>${key}:</strong> ${rec[key]}</li>`
            }
        }
        (document.getElementById('output') as HTMLDivElement).innerHTML = html;
    })
})