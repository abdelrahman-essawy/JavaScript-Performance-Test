var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

let getCodeToBeExcuted = () => {
    document.getElementById('runButton').addEventListener('click', () => {
        let codeToBeExcuted = editor.getValue();
        let numberOfTimes = document.getElementById('numberId').value
        performanceOf(codeToBeExcuted, numberOfTimes)
    })
}

let performanceOf = async (codeToBeExcuted, numberOfTimes) => {
    let average = 0;
    for (let i = 0; i < numberOfTimes; i++) {
        let startTime = performance.now()
        await eval(codeToBeExcuted)
        let endTime = performance.now()
        let result = endTime - startTime
        average += result
    }
    document.getElementById('successAlert').innerHTML = `It Took ${average / numberOfTimes} To Excute It Over ${numberOfTimes} Times.`
    // console.log(`It Took ${average / numberOfTimes} To Excute It Over ${numberOfTimes} Times.`);
}

getCodeToBeExcuted();



// let forEachMethod = () => {

//     let userList = [
//         { fname: 'Abdelrahman', lName: 'Mohamed' },
//         { fname: 'Ahmed', lName: 'Mohamed' }
//     ];
//     userList.forEach(user => {
//         user.fullname = user.fName + ` ` + user.lName;
//     });
// }

// let mapMethod = () => {

//     const userList2 = usersList;
//     userList2.map(user => user.fullname = user.fName + ` ` + user.lName)
// }

// let forLoopMethod = () => {

//     const userList3 = usersList;
//     for (let i = 0; i < userList3.length; i++) {
//         const user = userList3[i];
//         user.fullname = user.fName + ` ` + user.lName;
//     }
// }

// // performanceOf(mapMethod)
// // performanceOf(forLoopMethod)