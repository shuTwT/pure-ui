<svelte:options immutable={true} />

<script lang="ts">
  import Loading from "./pure-loading.svelte";
  import en from "./locales/en.json";
  import type { ButtonProps as Props } from "./types";
  import { onMount, createEventDispatcher, onDestroy, tick } from "svelte";
  export let type: Props["type"] = "default";
  export let value: Props["value"] = "";
  export let click: Props["click"] = () => {};
  export let locale: Props["locale"] = undefined;
  export let loading: Props["loading"] = false;
  export let icon: Props["icon"] = undefined;
  export let disabled: Props["disabled"] = false;
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
  {disabled}
  on:click={click}
  bind:this={elButton}
>
  {#if loading}
    {#if icon}
      <slot name="icon" />
    {:else}
      <Loading />
    {/if}
  {/if}
  <slot><span>{value}</span></slot>
</button>

<style>
  .pure-button {
    --pure-button-text-color: #606060;
    --pure-button-hover-text-color: var(--pure-color-primary);
    --pure-button-font-weight: 500;
    --pure-button-bg-color: var(--primary-bg);
    --pure-button-hover-bg-color: var(--pure-color-primary-light);
    --pure-button-border-color: #dcdfe6;
    --pure-button-hover-border-color: var(--pure-color-primary-light);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: var(--pure-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: var(--pure-button-font-weight);
    user-select: none;
    vertical-align: middle;
    appearance: none;
    background-color: var(--pure-button-bg-color);
    border: var(--pure-border);
    border-color: var(--pure-button-border-color);
    padding: 8px 15px;
    font-size: var(--pure-font-size);
    border-radius: var(--pure-border-radius);
  }
  .pure-button:hover,
  .pure-button:focus {
    color: var(--pure-button-hover-text-color);
    border-color: var(--pure-button-hover-border-color);
  }

  .pure-button.pure-button-primary {
    --pure-button-text-color: #fff;
    --pure-button-bg-color: var(--pure-color-primary);
    --pure-button-border-color: var(--pure-color-primary);
    --pure-button-hover-text-color: #fff;
    --pure-button-hover-border-color: #fff;
  }
  .pure-button.pure-button-success {
    --pure-button-text-color: #fff;
    --pure-button-bg-color: var(--success-color);
    --pure-button-border-color: var(--success-color);
    --pure-button-hover-text-color: #fff;
    --pure-button-hover-border-color: #fff;
  }
  .pure-button.pure-button-info {
    --pure-button-text-color: #fff;
    --pure-button-bg-color: var(--info-color);
    --pure-button-border-color: var(--info-color);
    --pure-button-hover-text-color: #fff;
    --pure-button-hover-border-color: #fff;
  }
  .pure-button.pure-button-warning {
    --pure-button-text-color: #fff;
    --pure-button-bg-color: var(--warning-color);
    --pure-button-border-color: var(--warning-color);
    --pure-button-hover-text-color: #fff;
    --pure-button-hover-border-color: #fff;
  }
  .pure-button.pure-button-danger {
    --pure-button-text-color: #fff;
    --pure-button-bg-color: var(--danger-color);
    --pure-button-border-color: var(--danger-color);
    --pure-button-hover-text-color: #fff;
    --pure-button-hover-border-color: #fff;
  }
  .is-disabled,
  .is-loading {
    cursor: not-allowed;
  }
  .pure-button:not([disabled], .is-loading):hover {
    filter: brightness(1.2);
  }
  .pure-button :global(.pure-loading) {
    left: -0.5em;
    top: -0.2em;
  }
</style>
