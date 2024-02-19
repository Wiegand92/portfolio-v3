<script lang="ts">
    // import { Starscape } from "$lib/Starscape";
	// import { onMount } from "svelte";
    let canvasRef: null | HTMLCanvasElement;
    // let drawing: null | Starscape;
    // onMount(() => {
    //     if (canvasRef){
    //         drawing = new Starscape(canvasRef)
    //         drawing?.RUN()
    //     }
    //     if(drawing){
    //         window.addEventListener('resize', drawing?.RUN)
    //         window.addEventListener('pointermove', (e) => {
    //             drawing?.UPDATE(e.clientX, e.clientY)
    //         })
    //     }
    // })

</script>
<canvas bind:this={canvasRef}></canvas>
<style>
    canvas{
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        position: absolute;
        background-color:var(--white);
        z-index: -1;
    }
</style>