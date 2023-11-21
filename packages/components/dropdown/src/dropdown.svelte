<svelte:options immutable={true} customElement="pu-dropdown"/>

<label class="pure-dropdown">
    <input type="checkbox">
    <slot></slot>
    <div class="dropdown-container">
        <div class="dropdown-item"></div>
    </div>
</label>