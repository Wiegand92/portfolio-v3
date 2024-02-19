<script lang='ts'>
	import { fade } from "svelte/transition";
	import Navbar from "./Navbar.svelte";

    type ClickFuntion = () => void
    export let clickHandler: undefined | ClickFuntion = undefined
</script>
<dialog class="modalWindow" in:fade out:fade>
    <button on:click={clickHandler}>X</button>
    <Navbar clickHandler={clickHandler}/>
</dialog>
<style>
    .modalWindow{
        display: flex;
        flex-direction: column;
        background-color: var(--orange);
        justify-content: space-around;
        height: 100vh;
        width: 100vw;
        z-index: 10;
        position:fixed;
        top: 0;
        left: 0;
        padding: 0;
    }
    button{
        position: fixed;
        top: 2rem;
        right: 2rem;
    }
</style>