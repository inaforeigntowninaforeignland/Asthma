import {
  validationMixin,
} from 'vuelidate';
import {
  required,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

import signUpApi from '../signUp.api';

export default {
  mixins: [
    validationMixin,
  ],
  data: () => ({
    form: {
      username: null,
      password: null,
    },
    sending: false,
    userNotSaved: false,
  }),
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(20),
      },
      password: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20),
      },
    },
  },
  methods: {
    // eslint-disable-next-line consistent-return
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.username = null;
      this.form.password = null;
    },
    signUp() {
      this.sending = true;
      this.userNotSaved = false;

      signUpApi.signUp(this.form.username, this.form.password)
        .then(() => {
          this.sending = false;
          this.clearForm();
        })
        .then(() => {
          this.$router.push('/profile');
        })
        .catch(() => {
          this.userNotSaved = true;
        })
        .finally(() => {
          this.sending = false;
        });
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.signUp();
      }
    },
  },
};
