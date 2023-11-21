<script lang="ts">
  import { PuButton } from "../../button";
  let isOpen = false;
  function cloneDialog() {
    console.log(1);
    isOpen = false;
  }
</script>
<div on:click={() => (isOpen = true)} on:keyup={() => {}}>
    <slot name="open" />
  </div>
<div class="pure-dialog" class:pure-dialog--open={isOpen}>
    <div class="overlay"></div>
  <div class="pure-dialog__wrap">
    <div class="pure-dialog__title">
      <slot name="title">dialog title</slot>
    </div>
    <div class="pure-dialog__content">
      <slot>dialog content</slot>
    </div>
    <div class="pure-dialog__action">
      <PuButton text on:click={() => cloneDialog()}>cancel</PuButton>
      <PuButton text on:click={() => cloneDialog()}>ok</PuButton>
    </div>
  </div>
</div>
