<script lang="ts">
  import type { SubmenuProps as Props } from "@pure-ui/components/types";
  import { getContext } from "svelte";
  import { PureMenu } from "@pure-ui/components";
  export let index: Props["index"] = null;
  export let disabled: Props["disabled"] = false;
  let activeIndex;
  let open = false;
  $: currentIndex = index;
  const variable = getContext<any>("activeItem");
  variable.subscribe((value) => {
    activeIndex = value;
  });

  const handleClick = () => {
    if (!disabled) {
      open = !open;
    }
  };
</script>

<li
  class="pure-submenu"
  class:is-opened={open}
  class:is-active={currentIndex == activeIndex}
  class:is-disabled={disabled}
>
  <div class="pure-submenu-title" on:click={handleClick} on:keydown={() => {}}>
    <slot name="title" />
  </div>
  <PureMenu>
    <slot />
  </PureMenu>
</li>

<style>
  .pure-submenu {
    list-style: none;
    margin: 0;
    padding-left: 0;
    position: relative;
    transition: all 0.2s;
  }
  .pure-submenu > :global(.pure-menu) {
    display: none;
    transition: all 0.2s;
    position: absolute;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    z-index: 2;
  }
  .pure-submenu.is-opened > :global(.pure-menu) {
    display: block;
  }

  .pure-submenu-title {
    --pure-menu-item-height: 56px;
    --pure-menu-font-size: 14px;
    --pure-menu-text-color: #303133;
    --pure-menu-base-level-padding: 20px;
    --pure-menu-icon-width: 24px;
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
    padding-right: calc(
      var(--pure-menu-base-level-padding) + var(--pure-menu-icon-width)
    );
  }
  .pure-submenu.is-active .pure-submenu-title {
    --pure-menu-active-color: #409eff;
    color: var(--pure-menu-active-color);
  }
</style>
