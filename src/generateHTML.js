
// Generates HTML string for each employee's card
const renderCards = (employees) => {
  const cards = employees.map(employee => {
    return `<div class='card'>
    <div class='card-header'>
      <h1>${employee.getName()}</h1>
      <h2>${employee.getRole()}</h2>
    </div>
    <hr>
    <div class='card-content'>
      <p>ID: ${employee.getId()}</p>
      <p>Email:</p><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
      ${uniqueSection(employee)}
    </div>
  </div>`
  })
  // Joins array into a string
  return cards.join('');
}

// Generates the sections that are unique to each employee
const uniqueSection = (employee) => {
  switch (employee.getRole()){
    case 'Manager': return `<p>Office Number: ${employee.getOfficeNumber()}</p>`
    case 'Engineer': return `<p>GitHub:</p><a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
    case 'Intern': return `<p>School: ${employee.getSchool()}</p>`
  }
}

// Generates the entire HTML string
const generateHTML = (employees) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/reset.css">
    <link rel="stylesheet" href="../dist/style.css">
    <title>My Team</title>
  </head>
  
  <body>
    <header>
      <h1>My Team</h1>
    </header>
  
    <main>
    ${renderCards(employees)}
    </main>

  </body>
  </html>`
}

module.exports = generateHTML;