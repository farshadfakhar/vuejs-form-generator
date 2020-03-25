import Vue from "vue";

import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate/dist/vee-validate.full";
// import { required } from "vee-validate/dist/rules";
import fa from "vee-validate/dist/locale/fa.json";

localize({
  fa: {
    messages: fa.messages,
    names: {
      name: "نام",
      user_id: "کاربر",
      family: "نام خانوادگی",
      father: "نام پدر",
      user_name: "نام کاربری",
      password: "رمزعبور",
      email: "ایمیل",
      mobile: "تلفن همراه",
      description: "توضیحات",
      title: "عنوان",
      subtitle: "توضیحات",
      telegram: "تلگرام",
      twitter: "توییتر",
      linkdin: "لینکدین",
      phone: "تلفن",
      group_id: 'گروه',
      username: 'نام کاربری',
      current_password: 'رمزعبور فعلی',
      new_password: 'رمزعبور جدید',
      confirm_password: 'تکرار رمزعبور',
      expert: 'کارشناس',
      tel: 'تلفن ثابت',
      personnel_code: 'کد پرسنلی',
      ssn: 'کدملی',
      password_confirmation: 'تکرار رمزعبور',
      country: 'کشور',
      province: 'استان',
      city: 'شهر',
      class: 'کلاس',
      address: 'آدرس',
      hotel_id: 'هتل'
    }
  }
});

extend('irani', {
  validate: (code) => {
    var L = code.length;
    if (L != 10 || parseInt(code, 10) == 0) return false;
    code = ('0000' + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    var c = parseInt(code.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++)
      s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
  },
  message: 'کد ملی صحیح نمی‌باشد.'
});

localize("fa", fa);
Vue.component("v-validate", ValidationProvider);
Vue.component("v-validate-observer", ValidationObserver);
