<svelte:options immutable={true} customElement="pu-menu-item"/>
<script lang="ts">
  import type { MenuItemProps as Props } from "@pure-ui/components/types";
  import { getContext } from "svelte";
  export let index: Props["index"] = null;
  export let disabled: Props["disabled"] = false;
  let activeIndex:any;
  $: currentIndex = index;
  const variable = getContext<any>("activeItem");
  variable.subscribe((value:any) => {
    activeIndex = value;
  });

  const handleClick = (e: any) => {
    if (!disabled&&typeof index=='string') {
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

