let studentScore = 80

if (studentScore >= 80 && studentScore <= 100) {
    console.log('A');
}
if (studentScore >= 65 && studentScore <= 79) {
    console.log('B+');
}
if (studentScore >= 50 && studentScore <= 64) {
    console.log('B');
}
if (studentScore >= 35 && studentScore <= 49) {
    console.log('C');
}
if (studentScore >= 0 && studentScore <= 34) {
    console.log('D');
}
else if (studentScore > 100) {
    console.log('Invalid');
}
else if (studentScore < 0) {
    console.log('Invalid')
}