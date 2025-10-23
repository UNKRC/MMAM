fetch('data/cuotas.json')
  .then(res => res.json())
  .then(data => {
    const tabla = document.getElementById('tabla-cuotas');
    data.peleas.forEach(p => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${p.evento}</td>
        <td>${p.peleadorA} (${p.cuotaA})</td>
        <td>${p.peleadorB} (${p.cuotaB})</td>
        <td>${p.fecha}</td>
      `;
      tabla.appendChild(row);
    });
  })
  .catch(err => console.error('Error al cargar cuotas:', err));
