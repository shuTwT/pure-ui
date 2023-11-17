<script lang="ts">
  import type { MenuProps as Props } from "@pure-ui/components/types";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  export let mode: Props["mode"] = "vertical";
  setContext("activeItem", writable("1"));
</script>

<ul
  class="pure-menu"
  class:pure-menu--horizontal={mode == "horizontal"}
  class:pure-menu--vertical={mode == "vertical"}
>
  <slot />
</ul>

