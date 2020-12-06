import {
  validationMixin,
} from 'vuelidate';
import {
  required,
  minLength,
} from 'vuelidate/lib/validators';

export default {
  mixins: [
    validationMixin,
  ],
  data: () => ({
    form: {
      username: null,
      password: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null,
  }),
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6),
      },
      password: {
        required,
        minLength: minLength(6),
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
    saveUser() {
      this.sending = true;

      window.setTimeout(() => {
        this.lastUser = `${this.form.username} ${this.form.password}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
};
