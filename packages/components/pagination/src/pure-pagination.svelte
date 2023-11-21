<svelte:options immutable={true} tag="pu-pagination"/>
<script lang="ts">
  import type { Pagination as Props } from "@pure-ui/components/types";
  export const total: Props["total"] =undefined;
</script>

<div class="pure-pagination" >
  <button type="button" class="btn-prev" aria-label="go to previous page"
    >&lt;</button
  >
  <ul class="pure-pager">
    <li class="number" aria-label="page 1">1</li>
  </ul>
  <button type="button" class="btn-prev" aria-label="go to next page"
    >&gt;</button
  >
</div>

