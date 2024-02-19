<script lang="ts">
    import logo from '$lib/assets/logo-planet-100x100.png'
	import Modal from '$lib/Modal.svelte';
    import Navbar from '$lib/Navbar.svelte'
    let showModal = false;
    function onClick(){ showModal = !showModal}
</script>
<div class='parent'>
    <div class="header">
        <img src={logo} alt="">
        <h1>Alex Wiegand</h1>
        <button class="hamburger" on:click={onClick}>
            <span class="bun"></span>
            <span class="bun"></span>
        </button>
        {#if showModal}
            <Modal clickHandler={onClick}/>
        {/if}
    </div>
    <div class="displayBox">

        <span><Navbar clickHandler={undefined}/></span>

        <slot></slot>
    </div>
</div>
<style>
    .parent {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--orange);
        text-shadow: var(--black) .15rem .15rem;
        padding: 1% 2%;
        background: linear-gradient(to bottom right, var(--purple), var(--black));
    }
    .hamburger{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 2rem;
        width: 2rem;
        padding: 0;
        margin: 0;
        border: none;
        background-color:var(--silver)
    }
    .bun {
        height: .2rem;
        width: 2rem;
        background-color: var(--black);
    }
    .displayBox {
        display: grid;
        grid-template-rows: 1fr 7fr;
        place-self: center;
        height: 80vh;
        width: 80vw;
        margin: auto;
        border:1px solid #000;
        border-radius: 1rem;
        overflow: hidden;
    }
    .displayBox span{
        display: none;
    }
    
    @media screen and (min-width: 768px){
        .hamburger{
            display: none;
        }
        .displayBox {
            grid-template: 
                "N C"
                "N C";
            grid-template-columns: 1fr 7fr;
            grid-template-rows: 1fr 7fr;
        }
        .displayBox span {
            display: block;
            grid-area: N;
        }
    }
</style>   