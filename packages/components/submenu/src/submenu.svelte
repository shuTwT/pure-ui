<svelte:options immutable={true} customElement="pu-submenu"/>
<script lang="ts">
  import type { SubmenuProps as Props } from "@pure-ui/components/types";
  import { getContext } from "svelte";
  import { PuMenu } from "@pure-ui/components";
  export let index: Props["index"] = null;
  export let disabled: Props["disabled"] = false;
  let activeIndex:any;
  let open = false;
  $: currentIndex = index;
  const variable = getContext<any>("activeItem");
  variable.subscribe((value:any) => {
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
  <PuMenu>
    <slot />
  </PuMenu>
</li>
