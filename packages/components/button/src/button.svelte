<svelte:options immutable={true} tag="pu-button" />

<script lang="ts">
  import { PuLoading } from "@pure-ui/components/loading";
  import { en } from "@pure-ui/locale";
  import type { ButtonProps as Props } from "@pure-ui/components/types";
  import { onMount,createEventDispatcher } from "svelte";
  export let type: Props["type"] = "default";
  export let value: Props["value"] = "";
//   export let click: Props["click"] = () => {};
  export let locale: Props["locale"] = undefined;
  export let loading: Props["loading"] = false;
  export let icon: Props["icon"] = undefined;
  export let disabled: Props["disabled"] = false;
  export let text:Props["text"] = false;
  let elButton: HTMLButtonElement;
  $: mergedLocale = { ...en, ...locale };
  onMount(() => {
    value = value || mergedLocale.defaultValue;
  });
</script>

<button
  class="pure-button"
  class:is-disabled={disabled}
  class:is-loading={loading}
  class:pure-button-default={type == "default"}
  class:pure-button-primary={type == "primary"}
  class:pure-button-success={type == "success"}
  class:pure-button-info={type == "info"}
  class:pure-button-warning={type == "warning"}
  class:pure-button-danger={type == "danger"}
  class:pure-button--text={text==true}
  {disabled}
  on:click
  bind:this={elButton}
>
  {#if loading}
    {#if icon}
      <slot name="icon" />
    {:else}
      <PuLoading />
    {/if}
  {/if}
  <slot><span>{value}</span></slot>
</button>
