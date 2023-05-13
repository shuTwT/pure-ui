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

<style>
  .pure-menu {
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
    box-sizing: border-box;
    border-right: solid 1px #fff;
    user-select: none;
  }
  .pure-menu--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: solid 1px #dcdcdc;
    border-right: none;
  }
  .pure-menu--horizontal > :global(.pure-menu-item) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #303133;
  }
  .pure-menu--horizontal > :global(.pure-submenu) > :global(.pure-menu) {
    position: absolute;
  }
  .pure-menu--vertical > :global(.pure-submenu) > :global(.pure-menu) {
    position: relative;
  }
  .pure-menu--horizontal > :global(.pure-menu-item):not(.is-disabled):hover,
  .pure-menu--horizontal > :global(.pure-menu-item):not(.is-disabled):focus {
    background-color: #fff;
  }
  .pure-menu--horizontal :global(.pure-menu-item):not(.is-disabled):hover,
  .pure-menu--horizontal
    :global(.pure-menu-item):not(.is-disabled):hover:focus {
    --pure-menu-hover-text-color: #409eff;
    --el-menu-hover-bg-color: #ecf5ff;
    outline: none;
    color: var(--pure-menu-hover-text-color);
    background-color: var(--el-menu-hover-bg-color);
  }
  .pure-menu--horizontal > :global(.pure-menu-item.is-active) {
    --pure-menu-active-color: #409eff;
    border-bottom: 2px solid var(--pure-menu-active-color);
    color: var(--pure-menu-active-color);
  }
  .pure-menu--horizontal > :global(.pure-submenu.is-active) {
    --pure-menu-active-color: #409eff;
    border-bottom: 2px solid var(--pure-menu-active-color);
    color: var(--pure-menu-active-color);
  }
</style>
