
    const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/ovdp?json';
   
    fetch(URL)
        .then(answer => answer.json())
        .then(data => {

            /*
                В середине этой функции вам доступна переменная data
                хранящая данные по размещенным облигациям внутреннего займа
            */

            console.log(data);

            
             //outputPlace.innerHTML = '...Result...';

        });

   
	