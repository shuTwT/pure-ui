<svelte:options immutable={true} customElement="pu-loading"/>
<script>
  export let type = "circle";
</script>

<i
  class="pure-loading"
  class:pure-loading-circle={type == "circle"}
  class:pure-loading-arrow-circle={type == "arrow"}
/>