
<script>
  export let title;
</script>

<style>
  .card-template {
    width: 35rem;
    margin: 5rem auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 1.5rem 1rem;
  }

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    padding-bottom: 2rem;
  }
</style>

<div class="card-template">
  <h1>{title}</h1>

  <div class="card-template__body">
    <slot />
  </div>
</div>