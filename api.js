const url =
  "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

async function fetchUOBdata() {
  // fetch data from the API
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Failed to fetch data");
      return;
    }

    // parse the JSON response into a JavaScript object
    const data = await response.json();

    //call the function
    displayUOBdata(data.results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function displayUOBdata(results) {
  const tableBody = decument.getElementById("table-body");
  //add each result as a table row
  results.forEach((result) => {
    const tableRow = decument.createElement("tr");

    tableRow.innerHTML = `
            <td>${result.year || "N/A"}</td>
            <td>${result.semester || "N/A"}</td>
            <td>${result.the_programs || "N/A"}</td>
            <td>${result.nationality || "N/A"}</td>
            <td>${result.colleges || "N/A"}</td>
            <td>${result.number_of_students || "N/A"}</td>
        `;

    tableBody.appendChild(tableRow);
  });
}

//wait for the DOM to fully load before executing the fetchUOBdata function
decument.addEventListener("DOMContentLoaded", fetchUOBdata);
