<svelte:options immutable={true} tag="pu-dialog"/>
<script lang="ts">
  import { PuButton } from "../../button";
  import {debounce} from 'lodash-es'
  let isOpen = false;
  const closeDialog=debounce(function() {
    setTimeout(() => {
        isOpen = false;
    }, 200);
  },200)

  
</script>
<div on:click={() => (isOpen = true)} on:keyup={() => {}}>
    <slot name="open" />
  </div>
<div class="pure-dialog" class:pure-dialog--open={isOpen}>
    <div class="overlay" on:click={closeDialog} on:keydown={closeDialog}></div>
  <div class="pure-dialog__wrap">
    <div class="pure-dialog__title">
      <slot name="title">dialog title</slot>
    </div>
    <div class="pure-dialog__content">
      <slot>dialog content</slot>
    </div>
    <div class="pure-dialog__action">
      <PuButton text on:click={() => closeDialog()}>cancel</PuButton>
      <PuButton text on:click={() => closeDialog()}>ok</PuButton>
    </div>
  </div>
</div>
