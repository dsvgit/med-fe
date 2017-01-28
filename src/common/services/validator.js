import Validator from 'validatorjs';

Validator.register('telephone', function(value, requirement, attribute) {
  return value.match(/^\d{3}-\d{3}-\d{4}$/);
}, 'The :attribute phone number is not in the format XXX-XXX-XXXX.');

Validator.register('person_name', function(value, requirement, attribute) {
  return value.match(/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/);
}, 'Введите корректное значение');


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
