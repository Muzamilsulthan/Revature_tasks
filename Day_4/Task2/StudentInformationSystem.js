
function DisplayInfo()
{
    let student={
        name:prompt("Enter your name"),
        age:Number(prompt("Enter your age")),
        grade:prompt("Enter your grade")
    }
    return student;
}

console.log(DisplayInfo());