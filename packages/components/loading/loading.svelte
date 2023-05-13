<script>
  export let type = "circle";
</script>

<i
  class="pure-loading"
  class:pure-loading-circle={type == "circle"}
  class:pure-loading-arrow-circle={type == "arrow"}
/>

<style>
  .pure-loading {
    position: relative;
    display: block;
    width: 1em;
    height: 1em;
    margin: auto;
  }
  .pure-loading-circle {
    border: 2px solid #000;
    border-top-color: transparent;
    border-radius: 100%;
    animation: circle infinite 0.75s linear;
  }
  .pure-loading-arrow-circle {
    border: 2px solid #000;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 100%;
    animation: arrow-circle infinite 0.75s linear;
  }
  .pure-loading-arrow-circle:before,
  .pure-loading-arrow-circle:after {
    position: absolute;
    top: 0.9em;
    left: -0.1em;
    border-top: 5px solid #000;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: "";
    transform: rotate(-30deg);
  }
  .pure-loading-arrow-circle:after {
    top: -0.2em;
    left: 0.5em;
    transform: rotate(150deg);
  }

  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes arrow-circle {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }
</style>
