const btnSubmit = document.querySelector('.btnSubmit');
const inpEmail = document.querySelector('.inpEmail');
const inpMessage = document.querySelector('.inpMessage');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const MESSAGE_REGEXP = /^[а-яёa-z]+$/i;

/* функция строку переводит в массив и проверяет все ли элементы массива содержат текст */
const stringInArray = (param) => {
    const paramArray = param.split('');
    let returnValue = false;
    paramArray.forEach(element => {

        if (MESSAGE_REGEXP.test(element)) {
            returnValue = true;
        }
    });
    return returnValue;
}

/* конец функции */


/* функция очищения инпута после неудачной отправки сообщения */


const clearInp = (inpValue) => {
    inpValue.style.backgroundColor = 'white';
    inpValue.style.color = 'black';
    inpValue.value = '';
}

/* конец функции очищения инпута */


/* установка фокуса на input */
inpEmail.addEventListener('focus', () => {
    clearInp(inpEmail);
})

inpMessage.addEventListener('focus', () => {
    clearInp(inpMessage);
})
/* конец функции установки инпута*/

/* функция отправки сообщения */

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!EMAIL_REGEXP.test(inpEmail.value)) {
        inpEmail.style.backgroundColor = 'red';
        inpEmail.style.color = 'white';
        inpEmail.value = 'Не валидный email';
        return;
    }
    if (!stringInArray(inpMessage.value)) {
        inpMessage.style.backgroundColor = 'red';
        inpMessage.style.color = 'white';
        inpMessage.value = 'Введите текст';
        return;
    }

    

        let params = new FormData(formbottom);
        fetch('./../send2.php', {
            method: 'POST',
            body: params
        })
            .then(response => response)
            .then(response => {
                if(response.ok) {
                   console.log('ok');
                   inpMessage.style.backgroundColor = 'green';
                   inpMessage.style.color = 'white';
                   inpMessage.value = 'Ваше сообщение отправлено'
                   return; 
                } else {
                    inpMessage.style.backgroundColor = 'red';
                    inpMessage.style.color = 'white';
                    inpMessage.value = 'Произошла ошибка. Попробуйте снова'
                    console.log('error');
                }
                
            })

        })


/* конец функции отправки сообщения */