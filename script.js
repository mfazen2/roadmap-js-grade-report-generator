function getLetterGrade(score){
    switch(true){
        case (score >= 90):
            return "A"
        case (score >= 80):
            return "B"
        case (score >= 70):
            return "C"
        case (score >= 60):
            return "D"
        default:
            return "F"
    }
}


function hasPassed(score){
    return (score >= 60)
}

function getFeedback(grade){
    switch(grade){
        case "A":
            return "Excellent work"
        case "F":
            return "Keep practicing"
        default:
            return "You passed"
    }
}

function createGradeReport(name,score){
    const grade = getLetterGrade(score);
    return {
        "name": name,
        "score": score,
        "grade": grade,
        "passed": hasPassed(score),
        "feedback": getFeedback(grade)
    }

}


console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));