import Validator from 'validatorjs';

import { apiV0 } from 'src/common/services/api';


//Validator.register('telephone', function(value, requirement, attribute) {
//  return value.match(/^\d{3}-\d{3}-\d{4}$/);
//}, 'The :attribute phone number is not in the format XXX-XXX-XXXX.');

//Validator.register('person_name', function(value, requirement, attribute) {
//  return value.match(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/);
//}, 'Введите корректное значение');

Validator.registerAsync('person_name', function(value, attribute, req, passes) {
  if (value.match(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/)) {
    passes();
    return;
  }

  passes(false, 'Введите корректное значение');
});

Validator.registerAsync('login_available', function(login, attribute, req, passes) {
  apiV0.get(`is-login-available/${attribute}/`, {
    params: {
      login
    }
  })
  .then(response => {
    if (response.data) {
      passes();
      return;
    }

    passes(false, 'Логин уже существует');
  })
});

let messages = {
  ...Validator.getMessages('ru'),
  required: 'Обязательное поле',
  alpha_num: 'Введите корректное значение',
  alpha: 'Введите корректное значение',
  person_name: 'Введите корректное значение',
  email: 'Введите корректное значение email'
};
Validator.setMessages('ru', messages);

Validator.useLang('ru');

export default Validator;
