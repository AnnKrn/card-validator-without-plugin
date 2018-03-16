const form = document.getElementById("form_tdc");

form.addEventListener("submit", e => {
  e.preventDefault();
  validateCardDetails(form)

});

// funcion para validar Numero de TDC
const validateTdcNumber = tdcNumber => {
  // console.log(typeof tdcNumber)
  const numberCard = tdcNumber.split('');
  // console.log(numberCard);
  
  // procesar numeros de TDC
  const processNumbers = numberCard.map((element, index) => {
    // console.log(element)
    // obtener los digitos de la tarjeta en index par para procesarlos 
    if(index % 2 == 0) {
      // multiplicarlos por 2
      // console.log(index)
      // console.log(element)
      elementInEvenIndex = element * 2;
      // console.log(elementInEvenIndex)
      if (elementInEvenIndex >= 10) {
        // de los resutados verificar los que son mayores o iguales a 10
        let stringElementGraterThanTen = elementInEvenIndex.toString()
        // console.log(stringElementGraterThanTen)
        sumElementGraterThanTen = parseInt(stringElementGraterThanTen[0]) + parseInt(stringElementGraterThanTen[1]);
        // console.log(sumElementGraterThanTen)
        return sumElementGraterThanTen
      };
      // console.log(elementInEvenIndex)
      return elementInEvenIndex
    } else {
      // regresa los números que no estan en indice par
      // console.log(element)
      return parseInt(element)
    }
  });

  // trabajar con numeros procesados
  // suma los 16 digitos
  const sumProcessedNumbers = processNumbers.reduce((element, initialize) => element + initialize);
  console.log(sumProcessedNumbers)

  // modulo de 10 = 0
  if (sumProcessedNumbers % 10 === 0) {
    document.getElementById('cn').classList.add('valid')
    return true
  } else {
    document.getElementById('cn').classList.add('invalid')
    return false
  }
}

// funcion para validar la fecha
const validateDate = expiredDate => {
  // console.log(typeof expiredDate)
  // convertir a array para trabajar
  const arrayexpiredDate = Array.from(expiredDate)
  // console.log(arrayexpiredDate)
  // separar numeros en mes y año
  const month = []
  month.push(arrayexpiredDate[0],arrayexpiredDate[1]);
  // console.log(month)
  const numberMonth = parseInt(month.join(''))
  // console.log(numberMonth)
  const year = []
  year.push(arrayexpiredDate[3], arrayexpiredDate[4]);
  const numberYear = parseInt(year.join(''))

  // // obtener fecha actual
  // const thisYear = new Date().getFullYear().toString()
  // // sale array vacio
  // const arrayThisYear = Array.from(thisYear)
  // // console.log(typeof thisYear)

  // const twoDigitYear = []
  // twoDigitYear.push(arrayThisYear[3]);
  // twoDigitYear.push(arrayThisYear[2]);

  // // console.log(twoDigitYear)
  
  if(numberMonth >= 01 && numberMonth <= 12 && numberYear >= 18 || numberYear == 99) {
    // console.log('si mes y año')
    document.getElementById('exp').classList.add('valid')
    return true
  } else {
    document.getElementById('exp').classList.add('invalid')
    return false
  }
};

// funcion para validar CVV
const validateCvv = cvv => {
  // console.log(cvv)
  if(cvv >= 001 && cvv <= 999 && typeof cvv == 'number') {
    // console.log('cumple cvv')
    document.getElementById('cvv').classList.add('valid')
    return true
  } else {
    document.getElementById('cvv').classList.add('invalid')
    return false
  }
}

// funcion para validar nombre 
const validateName = name => {
  if (name !== '' ) {
    document.getElementById('name').classList.add('valid')
    return true
  } 
  else {
    document.getElementById('name').classList.add('invalid')
    return false
  }
}

const validateCardDetails = form => {
  // array de imputs
  const formArray = Array.from(form)
  // console.log(formArray)

  // variables para
  const tdcNumber = formArray[0].value
  console.log(tdcNumber)
  const expiredDate = formArray[1].value
  const cvv = parseInt(formArray[2].value)
  const name = formArray[3].value
  
  // funciones de 

  // funciones de validacion
  if (validateTdcNumber(tdcNumber) == true && validateDate(expiredDate) == true && validateCvv(cvv) == true && validateName(name) == true) {
    alert('Sus pago esta en proceso')
    console.log("datos válido... enviar...");
    // return true
  } else {
    console.log('try again')
  }
}
