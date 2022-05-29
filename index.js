// type Member = [number, boolean];
// let john: Member = [12, true];
// type Member2 = {
//     [key : string] : string;
// }
// let team : Member2 = {
//     name : 'Lee',
//     age : '30'
// }
// function 함수(x: number) :number{
//     return x * 2;
// }
function 글자수(x) {
    return x.toString().length;
}
function 결혼(월소득, 집보유여부, 매력점수) {
    var result;
    result = 월소득;
    if (집보유여부) {
        result += 500;
    }
    ;
    if (매력점수 === '상') {
        result += 100;
    }
    if (result >= 600) {
        return '결혼가능';
    }
}
function 만들함수(x) {
    if (typeof x.subject === 'string') {
        console.log(x.subject);
        return x.subject;
    }
    else {
        console.log(x.subject[x.subject.length - 1]);
        return x.subject[-1];
    }
}
만들함수({ subject: 'math' });
만들함수({ subject: ['science', 'art', 'korean'] });
