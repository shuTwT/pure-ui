<script lang="ts">
  import type { MenuItemProps as Props } from "./types";
  import { getContext } from "svelte";
  export let index: Props["index"] = null;
  export let disabled: Props["disabled"] = false;
  let activeIndex;
  $: currentIndex = index;
  const variable = getContext<any>("activeItem");
  variable.subscribe((value) => {
    activeIndex = value;
  });

  const handleClick = (e: any) => {
    if (!disabled) {
      variable.set(index.split("-")[0]);
    }
  };
</script>

<li
  class="pure-menu-item"
  class:is-active={currentIndex == activeIndex}
  class:is-disabled={disabled}
  on:click={handleClick}
  on:keydown={() => {}}
>
  <slot />
</li>

<style>
  .pure-menu-item {
    --pure-menu-item-height: 56px;
    --pure-menu-font-size: 14px;
    --pure-menu-text-color: #303133;
    --pure-menu-base-level-padding: 20px;
    display: flex;
    align-items: center;
    height: var(--pure-menu-item-height);
    line-height: var(--pure-menu-item-height);
    font-size: var(--pure-menu-font-size);
    color: var(--pure-menu-text-color);
    padding: 0 var(--pure-menu-base-level-padding);
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color var(--pure-transition-duration),
      background-color var(--pure-transition-duration),
      color var(--pure-transition-duration);
    box-sizing: border-box;
    white-space: nowrap;
  }
  .pure-menu-item.is-active {
    --pure-menu-active-color: #409eff;
    color: var(--pure-menu-active-color);
  }
  .pure-menu-item.is-disabled {
    opacity: 0.25;
    background: none !important;
    cursor: not-allowed;
  }
</style>
