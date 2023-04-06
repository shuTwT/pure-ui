<svelte:options immutable={true} />

<script>
  export let label = "";
</script>

<td>
  <slot>{label}</slot>
</td>

<style>
  td {
    position: relative;
    padding: 9px 15px !important;
    overflow: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #e6e6e6;
  }
</style>
