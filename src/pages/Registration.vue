<template>
  <form class="card auth-card" @submit.prevent="submitForm">
    <div class="card-content">
      <span class="card-title">Регистрация</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корретный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{ $v.password.$params.minLength.min }} символов.
          Сейчас он {{ password.length }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите ваше имя
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";

@Component({
  name: "Registration",
  mixins: [validationMixin],
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: (v) => v },
  },
})
export default class Registration extends Vue {
  public email = "";
  public password = "";
  public name = "";
  public agree = false;

  async submitForm(): Promise<void> {
    if (this.$v.$invalid) {
      this.$v.$touch();
      return;
    }

    try {
      await this.$store.dispatch("registration", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      this.$router.push("/");
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
