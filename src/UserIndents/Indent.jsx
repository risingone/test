
// import getIndent from "./getIndent";
// import { errorHandler } from "../errorHandle";
// import { api } from "../axiosSetup";
import React from "react";
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';
import TableComponent from "./TableComponent";


export default function Indent() {
  const currentDate = new Date().toISOString().split("T")[0];
  const currentDate1 = new Date();
  currentDate1.setDate(currentDate1.getDate() + 10);
  const formattedDate = currentDate1.toISOString().split("T")[0];

//1
//   const formRef = useRef();
 
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     // Convert the form to PDF
//     const element = formRef.current;
//     html2pdf()
//       .set({ filename: 'form.pdf', format: 'a4',orientation: 'landscape', margin: [10, 10, 10, 10] })
//       .from(element)
//       .save();
//   };
  

//2
//   const formRef = useRef(null); // Initialize the formRef

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Convert the form to PDF
//     const element = formRef.current;

//     // Apply CSS styling to hide checkboxes and icons during PDF conversion
//     const checkboxElements = element.querySelectorAll('input[type="checkbox"]');
//     const iconElements = element.querySelectorAll('.fa');

//     checkboxElements.forEach((checkbox) => {
//       checkbox.style.display = 'none';
//     });

//     iconElements.forEach((icon) => {
//       icon.style.display = 'none';
//     });

//     // Generate the PDF
//     html2pdf()
//       .set({ filename: 'form.pdf', format: 'a4', orientation: 'landscape', margin: [10, 10, 10, 10] })
//       .from(element)
//       .save();
//   };
  
  
const formRef = useRef(null); // Initialize the formRef

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert the form to PDF
    const element = formRef.current;

    // Apply CSS styling to hide checkboxes and icons during PDF conversion
    const checkboxElements = element.querySelectorAll('input[type="checkbox"]');
    const iconElements = element.querySelectorAll('.fa');

    checkboxElements.forEach((checkbox) => {
      checkbox.style.display = 'none';
    });

    iconElements.forEach((icon) => {
      icon.style.display = 'none';
    });
    const options = {
        filename: 'output.pdf',
        format: 'a4',
  orientation: 'landscape',
      margin: [10, 10, 10, 10],
        pagebreak: { mode: 'avoid-all' },
        jsPDF: { orientation: 'landscape' } // Set the orientation to landscape
      };

    //   const element = document.getElementById('your-html-element'); // Replace 'your-html-element' with the ID of your HTML element to convert

    const submitButton = element.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.remove();
    }

html2pdf().set(options).from(element).save();
    // Generate the PDF
//     html2pdf()
//       .set({
//         filename: 'form.pdf',
//         format: 'a4',
//         orientation: 'landscape',
//         margin: [10, 10, 10, 10],
//         html2canvas: {
//           scale: 2, // Increase the scale to improve the quality
//         },
//         jsPDF: {
//           unit: 'pt', // Use point unit for better accuracy
//         },
//       })
//       .from(element)
//       .save();
  };


  return (
    <>
    <div className="pdf-container">
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-grid">
        <div className="form-row">
            <div className="col">
              <div className="d-flex align-items-center">
                <label htmlFor="project" className="mr-2">Project</label>
                <input
                  type="text"
                  className="form-control"
                  name="project"
                  id="project"
                  placeholder="Project name"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center">
                <label htmlFor="store" className="mr-2">Store</label>
                <input
                  type="text"
                  className="form-control"
                  name="store"
                  id="store"
                  placeholder="Store name"
                  required
                />
              </div>
            </div>
            <div className="col d-flex align-items-center">
                <label htmlFor="block" className="mr-2">Block</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="block"
                    name="block"
                    className="form-control"
                    placeholder="Find Block"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      style={{ padding: "0.64rem" }}
                    >
                      <i className="fa fa-search"></i>{" "}
                    </span>
                  </div>
                </div>
            </div>
            <div className="col d-flex align-items-center">
                <label htmlFor="gp" className="mr-2">GP</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="gp"
                    name="gp"
                    placeholder="Find GP"
                    required
                  />
                  <div className="input-group-append p-0">
                    <span
                      className="input-group-text"
                      style={{ padding: "0.64rem" }}
                    >
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
            </div>
        </div>

          <div className="form-row">
            <div className="col d-flex align-items-center">
                <label htmlFor="vendor" className="mr-2">Vendor</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="vendor"
                    name="vendor"
                    placeholder="Find Vendor"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      style={{ padding: "0.64rem" }}
                    >
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
            </div>
            <div className="col d-flex align-items-center mt-3">
                <label htmlFor="date" className="mr-2">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  max={currentDate}
                  placeholder="Date"
                  required
                />
            </div>
          </div>

          <TableComponent />

          {/* <div className="container mt-3">
          <table>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                    <th>Header 5</th>
                    <th>Header 6</th>
                    <th>Header 7</th>
                    <th>Header 8</th>
                    <th>Header 9</th>
                    <th>Header 10</th>
                    <th>Header 11</th>
                    <th>Header 12</th>
                    <th>Header 13</th>
                    <th>Header 14</th>
                    <th>Header 15</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 4</td>
                    <td>Data 5</td>
                    <td>Data 6</td>
                    <td>Data 7</td>
                    <td>Data 8</td>
                    <td>Data 9</td>
                    <td>Data 10</td>
                    <td>Data 11</td>
                    <td>Data 12</td>
                    <td>Data 13</td>
                    <td>Data 14</td>
                    <td>Data 15</td>
                </tr>
                <tr>
                    <td>Data 16</td>
                    <td>Data 17</td>
                    <td>Data 18</td>
                    <td>Data 19</td>
                    <td>Data 20</td>
                    <td>Data 21</td>
                    <td>Data 22</td>
                    <td>Data 23</td>
                    <td>Data 24</td>
                    <td>Data 25</td>
                    <td>Data 26</td>
                    <td>Data 27</td>
                    <td>Data 28</td>
                    <td>Data 29</td>
                    <td>Data 30</td>
                </tr>
            </tbody>
        </table>
          </div> */}
        </div>
        <div className="col d-flex" style={{ justifyContent: "space-around" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <style>
        {`
          /* CSS styles for PDF container */
          .pdf-container {
            display: flex;
            // align-items: center;
            justify-content: center;
            height: 100vh;
            font-size: 12px;
          }
          
          /* CSS styles for table cells */
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            padding: 8px;
            border: 1px solid black;
            text-align: center;
          }
        `}
      </style>
    </div>
    </>
  );
}
