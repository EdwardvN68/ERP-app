// Get scenario key from URL
const params = new URLSearchParams(window.location.search);
const scenarioKey = params.get('scenario');

// Load the JSON file
fetch('scenarios.json')
  .then(response => response.json())
  .then(data => {
    const scenario = data[scenarioKey];
    if (!scenario) {
      document.body.innerHTML = "<h2>Scenario not found.</h2>";
      return;
    }

    document.getElementById('scenario-title').textContent = scenario.title;

    const metaBlock = document.getElementById('scenario-meta');
    Object.entries(scenario.meta).forEach(([key, value]) => {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${key}:</strong> ${value}`;
      metaBlock.appendChild(p);
    });

    const timeline = document.getElementById('scenario-timeline');
    scenario.timeline.forEach(item => {
      const block = document.createElement('div');
      block.innerHTML = `
        <h3>${item.time} – ${item.title}</h3>
        <ul>
          <li><strong>Role:</strong> ${item.role}</li>
          ${item.description ? `<li>${item.description}</li>` : ""}
          ${item.actions.map(a => `<li>${a}</li>`).join("")}
          ${item.checklist ? `<li><strong>Checklist:</strong> ${item.checklist}</li>` : ""}
          ${item.form ? `<li><strong>Form:</strong> ${item.form}</li>` : ""}
          <li><strong>ERP Reference:</strong> ${item.ref}</li>
        </ul>
      `;
      timeline.appendChild(block);
    });
  })
  .catch(error => {
    document.body.innerHTML = `<h2>Error loading scenario: ${error}</h2>`;
  });
