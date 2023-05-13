<svelte:options immutable={true} />

<script lang="ts">
  import type { TableProps as Props } from "@pure-ui/components/types";
  export let thead: Props["thead"] = "";
  const theads = thead.split("-");
</script>

<table class="pure-table">
  <thead>
    <tr>
      <slot name="header">
        {#if thead != ""}
          {#each theads as head}
            <th class="thead">{head}</th>
          {/each}
        {/if}
      </slot>
    </tr>
  </thead>
  <tbody><slot /></tbody>
</table>

<style>
  .pure-table {
    --columns: 4;
    position: relative;
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;
    display: flex;
    line-height: 1.5;
    flex-direction: column;
  }
  .pure-table thead tr {
    position: relative;
    display: grid;
    font-weight: bold;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
  .pure-table tbody > :global(tr) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
  .pure-table tbody > :global(tr::before) {
    content: "";
    position: absolute;
    background-color: #ebeef5;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    box-sizing: border-box;
  }
  .pure-table tbody > :global(tr td) {
    position: relative;
    padding: 0.625em;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .pure-table tr::before {
    content: "";
    position: absolute;
    background-color: #ebeef5;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    box-sizing: border-box;
  }
</style>
