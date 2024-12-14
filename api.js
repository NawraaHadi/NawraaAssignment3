const url =
  "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

async function fetchUOBdata() {
  // fetch data from the API
  try {
    const response = await fetch(url);
    if (!response.ok || response.status !== 200) {
      console.error("Failed to fetch data");
    }

    const data = await response.json();

    //call the function
    displayUOBdata(data.results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
/**
 * Display records in the table
 * @param {Array} results - Fetched data
 */
function displayUOBdata(results) {
  //   const tableBody = decument.getElementById("table-body");
  const tableBody = document.querySelector("#data-table tbody");
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

decument.addEventListener("DOMContentLoaded", fetchUOBdata);
