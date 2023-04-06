<svelte:options immutable={true} />

<script lang="ts">
  import type { TableProps as Props } from "./types";
  export let data: Props["data"] = [];
</script>

<table class="pure-table">
  <thead>
    <tr>
      <slot />
    </tr>
  </thead>
  <tbody>
    {#each data as item, index}
      <tr>
        {#each Object.values(item) as subItem}
          <td> {subItem} </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .pure-table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;
  }

  .pure-table tbody td {
    position: relative;
    padding: 9px 15px !important;
    overflow: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #e6e6e6;
  }

  .pure-table tbody tr:nth-child(odd) {
    text-align: center;
    background-color: #f7f7f7;
  }
</style>
