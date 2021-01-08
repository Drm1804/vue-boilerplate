import _Vue from "vue";
import M from "materialize-css";

export function MessagePlugin(Vue: typeof _Vue, options?: MessagesPluginOptions) {
  Vue.prototype.$message = function (html: string) {
    M.toast({ html })
  }

  Vue.prototype.$error = function (html: string) {
    M.toast({ html: `[Ошибка]: ${html}` })
  }
}

export class MessagesPluginOptions {
  // add stuff
}

declare module 'vue/types/vue' {
  interface Vue {
    $message: Function;
  }
}
