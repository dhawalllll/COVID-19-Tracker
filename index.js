console.log("working")



fetch("data.json")
.then(res => res.json())
.then(states => {
     
     const table = document.getElementById("data-table");
     states.forEach(state => {
        table.innerHTML +=
        `<tr>
        <td>${state.state}</td>
        <td>${state.confirmed}</td>
        <td>${state.recovered}</td>
        <td>${state.deaths}</td>
        </tr>`;
     })
})
.catch(error => console.error("Error loading data:",error));

