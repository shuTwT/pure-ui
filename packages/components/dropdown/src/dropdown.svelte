<svelte:options immutable={true} />

<label class="pure-dropdown">
    <input type="checkbox">
    <slot></slot>
    <div class="dropdown-container">
        <div class="dropdown-item"></div>
    </div>
</label>