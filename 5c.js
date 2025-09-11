let mes = 9;
let resp;
if (mes <= 0 || mes >=13) {
    resp='mes invalido!!'
}
else {
    switch (mes) {
        case 1:
            resp = 'janeiro';
            break;
        case 2:
            resp = 'fevereiro';
            break;  
        case 3:
            resp = 'março';
            break;
        case 4:
            resp = 'abril';
            break;           
        case 5:
            resp = 'maio';
            break;
        case 6:
            resp = 'junho';
            break; 
        case 7:
            resp = 'julho';
            break;
        case 8:
            resp = 'agosto';
            break; 
        case 9:
            resp = 'setembro';
            break;
        case 10:
            resp = 'outubro';
            break;
        case 11:
            resp = 'novembro';
            break;
        case 12:
            resp = 'dezembro';
            break;                     
    }
}
console.log(resp)