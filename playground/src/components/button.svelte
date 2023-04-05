<svelte:options immutable={true} />

<script lang="ts">
  import en from "./locales/en.json";
  import type { ButtonProps as Props } from "./types";
  import { onMount, createEventDispatcher, onDestroy, tick } from "svelte";
  export let value: Props["value"] = "";
  export let click: Props["click"] = () => {};
  export let locale: Props["locale"] = undefined;
  export let loading: Props["loading"] = false;
  //export let icon: Props["icon"] = undefined;
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
  on:click={click}
  bind:this={elButton}
>
  <slot><span>{value}</span></slot>
  <slot name="icon" />
  {#if loading}
    <slot name="loading" />
  {/if}
</button>

<style>
  .pure-button {
    --el-button-bg-color: #fff;
    --el-button-text-color: #606060;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: var(--el-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: var(--el-button-font-weight);
    user-select: none;
    vertical-align: middle;
    appearance: none;
    background-color: var(--el-button-bg-color);
    border: var(--el-border);
    border-color: var(--el-button-border-color);
    padding: 8px 15px;
    font-size: var(--el-font-size-base);
    border-radius: var(--el-border-radius-base);
  }
  .is-disabled {
    cursor: not-allowed;
  }
</style>
