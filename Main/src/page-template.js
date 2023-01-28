// create the team
const generateTeam = team => {

    // create manager html
    const generateManager = manager => {
        return `
        <div>
            <h1>${manager.getName()}</h1>
        <div>
        `
    }

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div>
            <h1>${engineer.getName()}</h1>
        <div>
        `
    }

    // create html for interns
    const generateIntern = intern => {
        return `
        <div>
            <h1>${intern.getName()}</h1>
        <div>    
        `
    }

    const html = []

    // push the team array that is passed to this function into the empty array
    // get just the employees out of the html array that have a role of Manager
    // call the generateManager function, passing in that manager

    // same thing, but for employees that have Engineer role
    // at the end, join the array together

    // same thing, but for employees that have Intern role
    // at the end, joing the array together

    // return the joined array

}

// export function to generate entire page
module.exorts = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Info</title>
</head>
<body>
    <div>
        ${generateTeam(team)}
    </div>
</body>
</html>
    `
}