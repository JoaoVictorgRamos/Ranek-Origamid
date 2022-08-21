<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'UsuarioView' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioCompras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioVendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioEditar' }"
            >Editar Usuário</router-link
          >
        </li>
        <button @click.prevent="deslogar">Deslogar</button>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <p>pagina do usuario : {{ $store.state.usuario }}</p>
  </section>
</template>

<script>
export default {
  name: "UsuarioView",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/LoginView");
    },
  },
};
</script>

<style></style>
