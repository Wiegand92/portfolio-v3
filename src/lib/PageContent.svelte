<script lang='ts'>
    export let title = 'Page Name Here'
</script>
<h2>{title}</h2>
<div>
    <slot></slot>
</div>
<style>
    h2{
        place-self: center;
    }
</style>