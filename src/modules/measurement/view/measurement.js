import {
  validationMixin,
} from 'vuelidate';
import {
  required,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

import measurementApi from '@/modules/measurement/measurement.api';

export default {
  mixins: [
    validationMixin,
  ],
  data: () => ({
    form: {
      measurement: null,
    },
    sending: false,
    measurementNotValid: false,
  }),
  validations: {
    form: {
      measurement: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(6),
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
      this.form.measurement = null;
    },
    sendMeasurement() {
      this.sending = true;
      this.measurementNotValid = false;

      measurementApi.sendMeasurement(this.form.measurement)
        .then(() => {
          this.sending = false;
          this.clearForm();
        })
        .catch(() => {
          this.measurementNotValid = true;
        })
        .finally(() => {
          this.sending = false;
        });
    },
    validateMeasurement() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.sendMeasurement();
      }
    },
  },
};
