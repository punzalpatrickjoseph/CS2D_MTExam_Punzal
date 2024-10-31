const DSA = [];
const PL = [];
const Networks = [];

function enrollStudent(subject) {
    const name = prompt(`Enter the name of the student to enroll in ${subject}:`);
    if (name) {
        if (subject === 'DSA') DSA.push(name);
        else if (subject === 'PL') PL.push(name);
        else if (subject === 'Networks') Networks.push(name);
        console.log(`${name} has been enrolled in ${subject}.`);
    }
}

function unenrollStudent(subject) {
    let students;
    if (subject === 'DSA') students = DSA;
    else if (subject === 'PL') students = PL;
    else if (subject === 'Networks') students = Networks;

    if (students.length === 0) {
        console.log(`No students are currently enrolled in ${subject}.`);
        return;
    }

    console.log(`Currently enrolled students in ${subject}: ${students.join(', ')}`);
    const name = prompt(`Enter the name of the student to unenroll from ${subject}:`);
    const index = students.indexOf(name);
    
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`{name} has been unenrolled from ${subject}.`);
    } else {
        console.log(`{name} is not enrolled in ${subject}.`);
    }
}

function main() {
    while (true) {
        const subjectChoice = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks, (D) Exit").toUpperCase();
        
        let selectedSubject;
        if (subjectChoice === 'A') selectedSubject = 'DSA';
        else if (subjectChoice === 'B') selectedSubject = 'PL';
        else if (subjectChoice === 'C') selectedSubject = 'Networks';
        else if (subjectChoice === 'D') {
            console.log('Final enrollment lists:');
            console.log(`DSA: {DSA.join(', ')}`);
            console.log(`PL: {PL.join(', ')}`);
            console.log(`Networks: ${Networks.join(', ')}`);
            break;
        } else {
            console.log('Invalid choice. Please try again.');
            continue;
        }

        while (true) {
            const operationChoice = prompt("Select an operation (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();
            
            if (operationChoice === 'A') {
                enrollStudent(selectedSubject);
            } else if (operationChoice === 'B') {
                unenrollStudent(selectedSubject);
            } else if (operationChoice === 'C') {
                break;
            } else if (operationChoice === 'D') {
                console.log('Final enrollment lists:');
                console.log(`DSA: {DSA.join(', ')}`);
                console.log(`PL: {PL.join(', ')}`);
                console.log(`Networks: {Networks.join(', ')}`);
                return;
            } else {
                console.log('Invalid choice. Please try again.');
            }
        }
    }
}

main();
