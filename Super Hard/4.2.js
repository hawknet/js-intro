// Write a function that validates if postal code is Ukrainian or not. 

function PostCode(post) {
var ZIP = [
    // Назва області / Діапазон індексів області
    ['Київська', '07000', '09999'],
    ['Житомирська', '10000', '13999'],
    ['Чернігівська', '14000', '17999'],
    ['Черкаська', '18000', '20999'],
    ['Вінницька', '21000', '24999'],
    ['Кіровоградська', '25000', '28999'],
    ['Хмельницька', '29000', '32999'],
    ['Рівненьська', '33000', '35999'],
    ['Полтавська', '36000', '39999'],
    ['Сумська', '40000', '42999'],
    ['Волинська', '43000', '45999'],
    ['Тернопільська', '46000', '48999'],
    ['Дніпропетровська', '49000', '53999'],
    ['Миколаївська', '54000', '57999'],
    ['Чернівецька', '58000', '60999'],
    ['Харківська', '61000', '64999'],
    ['Одеська', '65000', '68999'],
    ['Запорізька', '69000', '72999'],
    ['Херсонська', '73000', '75999'],
    ['Івано-Франківська', '76000', '78999'],
    ['Львівська', '79000', '82999'],
    ['Донецька', '83000', '87999'],
    ['Закарпатська', '88000', '90999'],
    ['Луганська', '91000', '94999'],
    ['АР Крим', '95000', '98999']
]
    // if(post.length != 5) {return 'Це не поштовий код, введіть вірне значення'}
    var postN = Number(post);
    
    for(i=0; i<ZIP.length; i++) { console.log(i)
        if (postN >= ZIP[i][1] && postN <= ZIP[i][2]) {
            return ZIP[i][0];
        }
    }
    return 'Це не поштовий код України'
}

console.log(PostCode('8000'))
